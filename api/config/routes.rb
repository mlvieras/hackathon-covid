Rails.application.routes.draw do
  namespace :api do
    get 'business', to: 'business#index'
  end
end
