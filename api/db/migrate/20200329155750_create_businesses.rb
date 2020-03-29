class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.integer :type, null: false
      t.string :phone_numbers
      t.string :email, null: false
      t.string :instagram_url
      t.string :facebook_url
      t.text :description, null: false
      t.boolean :verified, default: false
      t.text :tags
      t.text :availability_hours

      t.timestamps
    end
  end
end
