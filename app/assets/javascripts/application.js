// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require turbolinks
//= require popper
//= require bootstrap
//= require_tree .
$(document).on('turbolinks:load', function()
{
  $('#api').submit(function(e) {
    e.preventDefault();
    $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+ $('#place').val()+"&key=AIzaSyD6BypTbSn8dXTO8Z1h6DLmiKpj5Cl5BDc").done(function(data){     
      $.ajax({
        url: '/location_search',
        type: 'post',
        data:{
          authenticity_token: $('#authenticity_token').val(),
          lat: data.results[0].geometry.location.lat,
          log: data.results[0].geometry.location.lng,
          address: data.results[0].formatted_address
        }, 
        dataType: "script"
      });
    });  
  });
});
