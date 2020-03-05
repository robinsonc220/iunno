class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.bigint :phone
      t.string :address
      t.string :city_town
      t.string :state
      t.integer :zip_code
      t.float :longitude
      t.float :latitude
      t.string :cuisine

      t.timestamps
    end
  end
end
