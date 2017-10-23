Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'api#home'
  get '/callback', to: 'api#callback'
  get '/locations', to: 'api#locations'
  post '/location_search', to: 'api#location_search'
  get '/locations/:id', to: 'api#location_recent_media'  
end
