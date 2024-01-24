Rails.application.routes.draw do
  root "registries#index"

  get "/registres", to: "registries#index"
end
