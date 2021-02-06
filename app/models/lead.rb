require 'ZCRMSDK'
class Lead < ApplicationRecord

  # Regex to test email validity
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  validates :email, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }, allow_nil: true, allow_blank: true

  before_save :downcase_email

  def create_zoho_lead

    config_details = { 
      'client_id' => Rails.application.credentials.dig(:zoho_client_id), 
      'client_secret' => Rails.application.credentials.dig(:zoho_client_secret_key), 
      'redirect_uri' => 'https://www.zoho.com', 
      'current_user_email' => Rails.application.credentials.dig(:zoho_email),
      'token_persistence_path' => Rails.public_path.to_s
    }

    lead_map = {
      'First_Name' => self.first_name,
      'Last_Name' => self.last_name.empty? ? '(No Last Name Provided)' : self.last_name,
      'Email' => self.email,
      'Phone' => self.phone,
      'Street' => "#{self.street_number} #{self.route}",
      'City' => self.locality,
      'State' => self.administrative_area_level_1,
      'Country' => self.country,
      'Zip_Code' => self.postal_code,
      'How_quickly_do_you_need_to_sell' => self.sale_time_frame,
      'Price_Wanted' => self.sale_target_price,
      'Is_the_seller_the_owner' => self.seller_owner,
      'Seller_Motivation' => self.details,
      'Lead_Source' => 'HomeBuyerWithAHeart.com',
      'Lead_Status' => 'Active'
    }

    # Init Zoho CRM Rest Client
    ZCRMSDK::RestClient::ZCRMRestClient.init(config_details)

    # Generate Access Token from Refresh Token
    ZCRMSDK::OAuthClient::ZohoOAuth.get_client_instance.generate_access_token_from_refresh_token(Rails.application.credentials.dig(:zoho_refresh_token), Rails.application.credentials.dig(:zoho_email))
    
    module_api_name = 'Leads'
    records = []
    rec1 = ZCRMSDK::Operations::ZCRMRecord.get_instance(module_api_name, nil)
    rec1.field_data = Array(lead_map)
    records.push(rec1)
    ZCRMSDK::Operations::ZCRMModule.get_instance(module_api_name).create_records(records, self.id).bulk_entity_response
    # Erase stored Access Token
    File.open(File.join(Rails.public_path, 'zcrm_oauthtokens.txt'), 'w') {|file| file.truncate(0) }
    
  end

  private

  # Converts email to all lower-case.
  def downcase_email
    self.email = email.downcase if self.email
  end
  
end
