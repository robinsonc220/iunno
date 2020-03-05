class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :img_url, :restaurant_id

  has_many :order_meals
  has_many :orders, through: :order_meals
end
