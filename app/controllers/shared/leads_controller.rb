# frozen_string_literal: true
module Shared
  class LeadsController < ApplicationController

    def create
      name_array = lead_params["first_name"].split(" ")
      if name_array.length > 1
        params[:lead][:first_name] = name_array[0]
        params[:lead][:last_name] = name_array[1..].join(" ")
      end
      @lead = Lead.create(lead_params)
      if @lead.save
        @lead.create_zoho_lead
        redirect_to(thank_you_path)
      else
        redirect_to(root)
      end
    end

    # custom route for thank you page
    def lead_captured
    end

    def lead_params
      params.require(:lead).permit(:first_name, :last_name, :email, :phone, :street_number,
        :address_line_2, :route, :locality, :administrative_area_level_1, :country, :postal_code)
    end
  end
end
