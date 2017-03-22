/*angular.module('citizen-engagement').factory('FilterService', function($http, apiUrl) {
  var service = {};

  service.filterby = function (checkboxState){

  }


  return service;

});*/

angular.module('citizen-engagement').controller('FilterCtrl', function(IssueService, geolocation, $ionicHistory, $state) {
  var filterCtrl = this;

  filterCtrl.goBack = function (){
    var filters = "";

    console.log($ionicHistory.backView());

    if(filterCtrl.newChecked){
      filters += "&"+filterCtrl.newChecked;
    }
    if(filterCtrl.inProgressChecked){
      filters += "&"+filterCtrl.inProgressChecked;
    }
    if(filterCtrl.rejectedChecked){
      filters += "&"+filterCtrl.rejectedChecked;
    }
    if(filterCtrl.resolvedChecked){
      filters += "&"+filterCtrl.resolvedChecked;
    }

    $state.go($ionicHistory.backView().stateName, {'filters': filters});

  };
});
