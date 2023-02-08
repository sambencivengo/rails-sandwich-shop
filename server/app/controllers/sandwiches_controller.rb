class SandwichesController < ApplicationController
 
  def index
    sandwiches = Sandwich.all  

    render json: sandwiches.to_json(:include => :ingredients)
  end

  def create

    sandwich = Sandwich.create!(sandwich_params)

    if sandwich.valid?
      render json: sandwich, status: :created
    else 
      render json: {
        errors: sandwich.errors.full_messages
      }, status: :unprocessable_entity 
    end
  end

  def sandwich_params
    params.require(:sandwich).permit(:name, :is_best_seller, :price)
  end

end
