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

angular.module('citizen-engagement').controller('MapCtrl', function(MapService, IssueService, geolocation, $scope, leafletData, mapboxSecret,$state, $stateParams) {
  var mapCtrl = this;

  if($stateParams.filters != null){
    var stateFilters = $stateParams.filters.split("&");
  }

  MapService.getLatitude().then(function(latitude) {
    mapCtrl.center.lat = latitude;
  });
  MapService.getLongitude().then(function(longitude) {
    mapCtrl.center.lng = longitude;
  });

  //create the map
  var mapboxMapId = 'mapbox.streets';  // define mapbox tileset
  // Build the tile layer URL
  var mapboxTileLayerUrl = 'http://api.tiles.mapbox.com/v4/' + mapboxMapId;
  mapboxTileLayerUrl = mapboxTileLayerUrl + '/{z}/{x}/{y}.png';
  mapboxTileLayerUrl = mapboxTileLayerUrl + '?access_token=' + mapboxSecret;

  mapCtrl.defaults = {
      tileLayer: mapboxTileLayerUrl
    };
  mapCtrl.markers = [];
  mapCtrl.center = {
    lat: 51.48,
    lng: 0,
    zoom: 14
  };

  mapCtrl.goToLocation = function (){
    MapService.getLatitude().then(function(latitude) {
      mapCtrl.center.lat = latitude;
    });
    MapService.getLongitude().then(function(longitude) {
      mapCtrl.center.lng = longitude;
    });
  }



  //Add issues marker on the map
  function createMarkers(issues) {
    for(var i=0; i<issues.length; i++){
      mapCtrl.markers.push({
        lat: issues[i].location.coordinates[1],
        lng: issues[i].location.coordinates[0],
        issue: issues[i]
      });
    }
  }

  $scope.$on('leafletDirectiveMap.moveend', function(event, map){
    loadMarkers();
  });

  function loadMarkers() {
    leafletData.getMap().then(function(map) {

      IssueService.getIssuesByLocation(map, stateFilters).then(function(issues){
        mapCtrl.markers = [];
        createMarkers(issues);
      });
    });
  }

  //Redirect to issueDetails when click event on a marker
  $scope.$on('leafletDirectiveMarker.click', function(event, marker) {
    $state.go('issueDetails', {issueId: marker.model.issue.id});
  });
});
