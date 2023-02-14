class Api::IngredientsController < ApplicationController
   
  def index
    @unsorted_ingredients = Ingredient.all  

    sorted_ingredients = {
      meats: {
        category: Constants::Meats[:Category],
        options: []
      },
      cheeses: {
        category: Constants::Cheeses[:Category],
        options: []
      },
      breads: {
        category: Constants::Breads[:Category],
        options: []
      },
      condiments: {
        category: Constants::Condiments[:Category],
        options: []
      },
      vegetables: {
        category: Constants::Vegetables[:Category], 
        options: []
      }
    }

    @unsorted_ingredients.each do |ingredient|
      category = ingredient[:category]

      case category
        when Constants::Cheeses[:Category]
          sorted_ingredients[:cheeses][:options].push(ingredient)
          
        when Constants::Vegetables[:Category]
          sorted_ingredients[:vegetables][:options].push(ingredient)

        when Constants::Meats[:Category]
          sorted_ingredients[:meats][:options].push(ingredient)

        when Constants::Breads[:Category]
          sorted_ingredients[:breads][:options].push(ingredient)

        when Constants::Condiments[:Category]
          sorted_ingredients[:condiments][:options].push(ingredient)
        end
    end

    render json: sorted_ingredients
  end

end
