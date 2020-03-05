class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.string :img_url
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
