class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :cc_num, :exp_date, :phone, :address, :city_town, :state, :zip_code, :first_name, :last_name, :security_code, :billing_zip, :full_name

  has_many :orders
  has_many :order_meals, through: :orders
  has_many :meals, through: :order_meals

  def full_name
    object.first_name + " " + object.last_name
  end

end