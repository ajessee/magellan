Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'magellan#home'

  # Users
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  resources :users

  # Sessions
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Account Activation
  resources :account_activations, only: [:edit]

  # Password Resets
  resources :password_resets, only: %i[new create edit update]

  # Custom HTTP status pages
  get 'errors/bad_request'
  get '/400', to: 'errors#bad_request'
  get 'errors/unauthorized'
  get '/401', to: 'errors#unauthorized'
  get 'errors/forbidden'
  get '/403', to: 'errors#forbidden'
  get 'errors/not_found'
  get '/404', to: 'errors#not_found'
  get 'errors/internal_server_error'
  get '/500', to: 'errors#internal_server_error'
end
