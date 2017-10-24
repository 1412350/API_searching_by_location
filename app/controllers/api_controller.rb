class ApiController < ApplicationController
  def home
  end
  def callback
    response = Instagram.get_access_token(params[:code], redirect_uri: ENV['REDIRECT_URI'])
    session[:access_token] = response.access_token
    redirect_to locations_path    
  end
  def locations
  end
  def location_search
    client = Instagram.client(access_token: '521843581.e029fea.98f7902749c646ce95214dd83194a1c1')
    @locations = client.location_search(params[:lat], params[:log], "5000")
    @lat = params[:lat]
    @lgn = params[:log]
    @address = params[:address]
    respond_to do |format|
      format.js
    end
  end
  def location_recent_media
    client = Instagram.client(access_token: '521843581.e029fea.98f7902749c646ce95214dd83194a1c1')
    @medias = client.location_recent_media(params[:id])
    respond_to do |format|
      format.js
    end
  end  
end
