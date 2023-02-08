# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Constants::Cheeses[:Options].each {
  |option|  Ingredient.create({name: option, category: Constants::Cheeses[:Category], price: rand(1..2) * 100 })
}

Constants::Meats[:Options].each {
  |option|  Ingredient.create({name: option, category: Constants::Meats[:Category], price: rand(1..3) * 100 })
}

Constants::Breads[:Options].each {
  |option|  Ingredient.create({name: option, category: Constants::Breads[:Category], price: rand(1..3) * 100 })
}