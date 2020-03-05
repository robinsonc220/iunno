class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :address, :city_town, :state, :zip_code, :longitude, :latitude, :cuisine, :img_url

  has_many :meals

end
