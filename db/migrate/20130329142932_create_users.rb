class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, :null => false
      t.string :email, :null => false
      t.string :name
      t.boolean :admin, :null => false, :default => false
      t.string :activation_token

      t.timestamps
    end
  end
end
