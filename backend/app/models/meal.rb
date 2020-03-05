class Meal < ApplicationRecord
    has_many :order_meals
    has_many :orders, through: :order_meals
    belongs_to :restaurant
end
