class Api::V1::MealsController < ApplicationController
    def index
        @meals = Meal.all
        render json: @meals
    end

    def show
        @meal = Meal.find(prams[:id])
        render json: @meal
    end

    def update
        @meal = Meal.find(params[:id])
        if @meal.update(meal_params)
          render json: @meal
        else
          render json: {errors: "Invalid update"}
        end
    end

    private
    
    def meal_params
      params.permit(:name, :description, :price, :image_url, :restaurant_id)
    end
end
