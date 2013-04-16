class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.references :user
      t.date :date
      t.boolean :join

      t.timestamps
    end
    add_index :entries, :user_id
  end
end
