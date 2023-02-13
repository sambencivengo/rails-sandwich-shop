class Sandwich < ApplicationRecord
  has_and_belongs_to_many :orders
  has_many :sandwich_ingredients
  has_many :ingredients, through: :sandwich_ingredients

  # validations
  validates :name, presence: true # uniqueness: true
  validates :price, presence: true
  validates :is_best_seller, presence: true
  # TODO: validate array of integers for ingredients
end
