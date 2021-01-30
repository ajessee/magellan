class CreateLeads < ActiveRecord::Migration[6.1]
  def change
    create_table :leads do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :lead_source
      t.string :lead_status
      t.string :street_number
      t.string :route
      t.string :locality
      t.string :administrative_area_level_1
      t.string :country
      t.string :postal_code
      t.string :sale_time_frame
      t.string :sale_target_price
      t.boolean :seller_owner
      t.string :details

      t.timestamps
    end
  end
end
