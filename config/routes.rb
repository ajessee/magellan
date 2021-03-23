# frozen_string_literal: true
require_relative "domain_constraint"

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  concern :shared_routes do
    # Leads
    resources :leads, only: [:create], path: "cash-offer" do 
      get "/thank-you", to: "leads#lead_captured"
    end

    # Users
    resources :users do 
      get "/signup", to: "users#new"
      post "/signup", to: "users#create"
    end

    # Account Activation
    resources :account_activations, only: [:edit]

    # Password Resets
    resources :password_resets, only: %i[new create edit update]

    # Sessions
    get "/login", to: "sessions#new"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"


    # Custom HTTP status pages
    get "errors/bad_request"
    get "/400", to: "errors#bad_request"
    get "errors/unauthorized"
    get "/401", to: "errors#unauthorized"
    get "errors/forbidden"
    get "/403", to: "errors#forbidden"
    get "errors/not_found"
    get "/404", to: "errors#not_found"
    get "errors/internal_server_error"
    get "/500", to: "errors#internal_server_error"
    match "*path", to: "errors#not_found", via: :all
  end

  constraints DomainConstraint.new("localhost:3000") do
    ## For testing locally
    ## homebuyer with a heart
    scope module: :home_buyer_with_a_heart do
      root "main#home", as: "home_buyer_local_root"
      get "/faq", to: "main#faq"
    end
    scope module: :shared do
      concerns :shared_routes
    end
    ## buy your house texas
    # scope module: :buy_your_house_texas do
    #   root "main#home", as: "buy_texas_local_root"
    #   get "/test", to: "main#test"
    # end
    # scope module: :shared do
    #   concerns :shared_routes
    # end
  end

  constraints DomainConstraint.new("magellan-investments.herokuapp.com") do
    scope module: :home_buyer_with_a_heart do
      root "main#home"
      get "/faq", to: "main#faq"
    end
    scope module: :shared do
      concerns :shared_routes
    end
  end

  constraints DomainConstraint.new("www.homebuyerwithaheart.com") do
    scope module: :home_buyer_with_a_heart do
      root "main#home"
      get "/faq", to: "main#faq"
    end
    scope module: :shared do
      concerns :shared_routes
    end
  end

  constraints DomainConstraint.new("www.buyyourhousetexas.com") do
    scope module: :buy_your_house_texas do
      root "main#home", as: "buy_texas_root"
      get "/test", to: "main#test"
    end
    scope module: :shared do
      concerns :shared_routes
    end
  end

end
