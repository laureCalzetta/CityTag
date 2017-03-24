angular.module('citizen-engagement').factory('ProfileService', function($http, apiUrl, $ionicLoading) {
  var service = {};

  service.getCurrentUser = function getCurrentUser(){
    return $http({
      method: 'GET',
      url: apiUrl+'/me',

    }).then(function(res) {
     return res.data;

    }).catch(function() {
      console.log("error no user found");
    });

  }

  return service;

});

angular.module('citizen-engagement').controller('ProfileCtrl', function(ProfileService) {
  var profileCtrl = this;

  ProfileService.getCurrentUser().then(function(user){
    profileCtrl.user = user;
  });

});
