# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, path: 'admin'
  resources :faqs, only: [:index]
  namespace :admin do
    resources :faqs
  end
end
