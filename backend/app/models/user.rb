class User < ApplicationRecord
    has_many :orders
    has_many :order_meals, through: :orders
    has_many :meals, through: :order_meals

    has_secure_password
    validates :email, uniqueness: true
end
