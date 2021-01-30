class AddIndexToLeads < ActiveRecord::Migration[6.1]
  def change
    # Add index to email column in leads table and ensure uniqueness
    add_index :leads, :email, unique: true
  end
end
