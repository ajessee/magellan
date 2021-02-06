class RemoveIndexAndAddFieldsToLeads < ActiveRecord::Migration[6.1]
  def change
    remove_index :leads, :email

    add_column :leads, :address_line_2, :string
  end
end
