class AddSubmitFormButtonTextToSite < ActiveRecord::Migration[6.1]
  def change
    add_column :sites, :submit_form_button_text, :string
  end
end
