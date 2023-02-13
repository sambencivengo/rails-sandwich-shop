class SandwichIngredientsController < ApplicationController
  def show
    sandwich_ingredient = SandwichIngredient.find(params[:id])
    render json: sandwich_ingredient
  end
end
