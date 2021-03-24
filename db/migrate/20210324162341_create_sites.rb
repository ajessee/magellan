class CreateSites < ActiveRecord::Migration[6.1]
  def change
    create_table :sites do |t|
      t.string :domain
      t.string :subdomain
      t.string :namespace

      t.timestamps
    end
  end
end
