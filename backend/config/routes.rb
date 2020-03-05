Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users 
        resources :meals 
          resources :restaurants 
            resources :orders
            resources :order_meals

            post '/login', to: 'users#login'
            get '/persist', to: 'users#persist'
          end
        end
      end
    
