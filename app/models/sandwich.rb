class Sandwich < ApplicationRecord


  # validations
  validates :name, presence: true, uniqueness: true
  validates :price, presence: true
  validates :is_best_seller, presence: true
end
