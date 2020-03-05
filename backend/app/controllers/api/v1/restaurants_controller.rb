class Api::V1::RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all
        render json: @restaurants
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render json: @restaurants
    end

    def update
        @restaurant = Restaurant.find(params[:id]);
        @restaurant.update(check_params)
        if @restaurant.valid?
            render json: @restaurant
        else
            render json: {errors: @restaurant.errors.full_messages}
        end
    end

    private
    def check_params
        params.permit(:name, :phone, :address, :city_town, :state, :zip_code, :longitude, :latitude, :cuisine)
    end
end
