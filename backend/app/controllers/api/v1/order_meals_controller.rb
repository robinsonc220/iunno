class Api::V1::OrderMealsController < ApplicationController
    def index
        @order_meals = OrderMeal.all
        render json: @order_meals
    end

    def show
        @order_meal = OrderMeal.find(params[:id])
        render json: @order_meal
    end

    def destroy
      @order_meal = order_meal.find(params[:id])
      @order_meal.destroy
    end

    def create
        # byebug
        @order_meal = OrderMeal.create(order_meal_params)
        # byebug
        if @order_meal.valid?
          render json: @order_meal, status: 201
        else
          render json: {errors: @order_meal.errors.full_messages}, status: 418
        end
      end

    def update
        @order_meal = OrderMeal.find(params[:id]);
        @order_meal.update(order_meal_params)
        if @order_meal.valid?
            render json: @order_meal
        else
            render json: {errors: @order_meal.errors.full_messages}
        end
    end

    private
    def order_meal_params
        params.permit(:meal_id, :order_id)
    end
end
