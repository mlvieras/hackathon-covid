class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.string :name
      t.integer :type
      t.string :phone_numbers
      t.string :email
      t.string :instagram_url
      t.string :facebook_url
      t.text :description
      t.boolean :verified, default: false
      t.text :tags
      t.text :availability_hours

      t.timestamps
    end
  end
end
