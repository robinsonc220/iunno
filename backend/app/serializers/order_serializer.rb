class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :created_at

    has_many :order_meals
    has_many :meals, through: :order_meals
    has_many :restaurants, through: :meals

end
