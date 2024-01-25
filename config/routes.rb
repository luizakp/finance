Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root "registries#index"

  get "/registres", to: "registries#index"
end
