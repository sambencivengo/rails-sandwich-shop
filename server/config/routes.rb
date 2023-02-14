Rails.application.routes.draw do
  namespace :api do
    resources :sandwich_ingredients
    resources :ingredients
    resources :sandwiches
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
