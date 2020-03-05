class Order < ApplicationRecord
    belongs_to :user
    # belongs_to :meal
    has_many :order_meals
    has_many :meals, through: :order_meals
    has_many :restaurants, through: :meals
end
