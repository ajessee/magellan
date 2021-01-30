class LeadsController < ApplicationController

  def new
  end
  
  def create
    @lead = Lead.create(lead_params)
  end
  
  def edit
    @lead = Lead.find(params[:id])
    @lead.update(lead_params)
    @lead.save
  end
  
  def update
    @lead = Lead.find(params[:id])
    @lead.update(lead_params)
    @lead.save
  end

  def destroy
  end

  def lead_params
    params.require(:lead).permit(:first_name, :last_name, :email, :phone, :lead_source, :lead_status, :street_number, :route, :locality, :administrative_area_level_1, :country, :postal_code, :sale_time_frame, :sale_target_price, :seller_owner, :details)
  end
end
