class CreateSandwichIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :sandwich_ingredients do |t|
      t.references :sandwich, null: false, foreign_key: true
      t.references :ingredient, null: false, foreign_key: true
    end
  end
end
