angular.module('citizen-engagement').factory('MapService', function($http, geolocation, $log) {
  var service = {};

  //Return current latitude
  service.getLatitude = function() {
    return geolocation.getLocation().then(function(data){
      return data.coords.latitude;
    }).catch(function(err) {
      $log.error(err);
    });
  };

  //Return current longitude
  service.getLongitude = function() {
    return geolocation.getLocation().then(function(data){
      return data.coords.longitude;
    }).catch(function(err) {
      $log.error(err);
    });
  };

  return service;
});

angular.module('citizen-engagement').controller('MapCtrl', function(MapService, geolocation, $log) {
  var mapCtrl = this;

  MapService.getLatitude().then(function(latitude) {
    mapCtrl.center.lat = latitude;
  });
  MapService.getLongitude().then(function(longitude) {
    mapCtrl.center.lng = longitude;
  });

  mapCtrl.defaults = {};
  mapCtrl.markers = [];
  mapCtrl.center = {
    lat: 51.48,
    lng: 0,
    zoom: 14
  };
});
