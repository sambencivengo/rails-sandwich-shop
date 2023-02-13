
class SandwichesController < ApplicationController

 
  def index
    sandwiches = Sandwich.all  
    render json: sandwiches.to_json(:include => :ingredients)
  end

  def create
    ingredients = params[:ingredients].map {
      |ingredientId| ingredient = Ingredient.find(ingredientId)
      # if an ingredient doesn't exist, we will 404 and prevent sandwich creation
    }

    total_sandwich_price = (ingredients.map do |ingredient|
      ingredient.price
    end).sum

    sandwich = Sandwich.create!(sandwich_params)
    sandwich.price = total_sandwich_price

    if !sandwich.valid?
      render json: {
        errors: sandwich.errors.full_messages
      }, status: :unprocessable_entity 
    end 
    
    ingredients.each {
      |ingredient| SandwichIngredient.create!({sandwich_id: sandwich[:id], ingredient_id: ingredient[:id] })
    }
    

    render json: sandwich.to_json(:include => :ingredients) 

  end

  def sandwich_params
    params.require(:sandwich).permit(:name, :is_best_seller, :price, :ingredients)
  end

end
