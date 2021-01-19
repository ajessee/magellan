class AddIndexToUsers < ActiveRecord::Migration[6.1]
  def change
    # Add index to email column in users table and ensure uniqueness
    add_index :users, :email, unique: true
  end
end
