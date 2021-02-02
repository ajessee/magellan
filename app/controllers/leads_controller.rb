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
    final_submit = lead_params[:final_submit] && lead_params[:final_submit] == 'true'
    if @lead.update(lead_params.except(:final_submit))
      @lead.save
      if (final_submit)
        @lead.create_zoho_lead
        render 'lead_captured'
      end
    else
      render 'create'
    end
  end

  def destroy
  end

  def lead_params
    params.require(:lead).permit(:first_name, :last_name, :email, :phone, :street_number, :route, :locality, :administrative_area_level_1, :country, :postal_code, :sale_time_frame, :sale_target_price, :seller_owner, :details, :final_submit)
  end
end
