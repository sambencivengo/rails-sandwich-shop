Rails.application.routes.draw do
  resources :sandwich_ingredients
  resources :ingredients
  resources :sandwiches
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
