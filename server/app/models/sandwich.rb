class Sandwich < ApplicationRecord
  belongs_to :order
  has_many :sandwich_ingredients
  has_many :ingredients, through: :sandwich_ingredients

  # validations
  validates :name, presence: true # uniqueness: true
  validates :is_best_seller, presence: true
  # TODO: validate array of integers for ingredients
end
