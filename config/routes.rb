# frozen_string_literal: true

Rails.application.routes.draw do
  get 'welcome/index'
  root to: 'welcome#index'
  resources :users
  get 'app', to: 'users#index'
end
