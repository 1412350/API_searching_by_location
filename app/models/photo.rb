class Photo < ApplicationRecord
  validates :thumbnail_url, :owner, :link, :presence => true
  
  
end
