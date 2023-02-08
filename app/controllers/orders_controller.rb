class OrdersController < ApplicationController

  def index
    orders = Order.all
    render json: orders
  end

  def create 
    order = Order.create!(order_params)

    if order.valid?
      render json: order.to_json(:include => :sandwich), status: :created
    else 
      render json: {
        errors: order.errors.full_messages
      }, status: :unprocessable_entity 
    end
  end

  def order_params
    params.require(:order).permit(:sandwich_id)
  end

end
