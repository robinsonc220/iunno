class Api::V1::OrdersController < ApplicationController
    def index
        @orders = Order.all
        render json: @orders
    end

    def create
        @order = Order.create(order_params)
        # byebug
        if @order.valid?
          render json: @order, status: 201
        else
          render json: {errors: @order.errors.full_messages}, status: 418
        end
      end

    def show
        @order = Order.find(params[:id])
        render json: @order
    end

    def destroy
      @order = Order.find(params[:id])
      @order.destroy
    end

    private
    
    def order_params
      params.permit(:user_id, :meal_id)
    end
end
