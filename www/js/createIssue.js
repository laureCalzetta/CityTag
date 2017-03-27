angular.module('citizen-engagement').factory('CameraService', function($q) {

  var service = {
    isSupported: function() {
      return navigator.camera !== undefined;
    },
    getPicture: function() {
      var deferred = $q.defer();
      var options = { // Return the raw base64 PNG data
        destinationType: navigator.camera.DestinationType.DATA_URL,
        correctOrientation: true
      };
      navigator.camera.getPicture(function(result) {
        deferred.resolve(result);
      }, function(err) {
        deferred.reject(err);
      }, options);
      return deferred.promise;
    }
  };

  return service;
});

angular.module('citizen-engagement').controller('CreateIssueCtrl', function($q,$ionicHistory, $stateParams, $ionicPopup, $http, $scope, $state, IssueService, CameraService, $log, qimgUrl, qimgSecret ,apiUrl, geolocation) {

  var createIssueCtrl = this;

  createIssueCtrl.goBack = function (){
    $ionicHistory.goBack();
  };
  $scope.$on('$ionicView.beforeEnter', function() {

    IssueService.getIssueTypes().then(function(issueTypes){
      createIssueCtrl.issueTypes = issueTypes;

    });

  });

  createIssueCtrl.issue = {};

  // Take a picture and attach it to "createIssueCtrl.issue"
  createIssueCtrl.takePicture = function() {
    // Display an alert if the camera is not supported
    if (!CameraService.isSupported()) {
      return $ionicPopup.alert({
        title: 'Not supported',
        template: 'You cannot use the camera on this platform'
      });
    }

    // Take the picture
    CameraService.getPicture({ quality: 50 }).then(function(result) {
      $log.debug('Picture taken!');
      createIssueCtrl.pictureData = result;
    }).catch(function(err) {
      $log.error('Could not get picture because: ' + err.message);
    });
  };

  // Create an issue:
  // * First upload the picture to the qimg API
  // * Then create the issue using the image URL provided by the qimg API
  createIssueCtrl.createIssue = function() {
    return postImage().then(postIssue).catch(function(err) {
      $log.error('Could not create issue because: ' + err.message);
      createIssueCtrl.error = err.message;
    });
  };

  function postImage() {
    if (!createIssueCtrl.pictureData) {
      // If no image was taken, return a promise resolved with "null"
      return $q.when(null);
    }

    // Upload the image to the qimg API
    return $http({
      method: 'POST',
      url: qimgUrl + '/images',
      headers: {
        Authorization: 'Bearer ' + qimgSecret
      },
      data: {
        data: createIssueCtrl.pictureData
      }
    }).then(function(res){
      console.log();
      createIssueCtrl.issue.imageUrl = res;
    }).catch(function(err){
      $log.error(err);
    });
}
  function postIssue(imageRes) {



    // Use the image URL from the qimg API response (if any)
    if (imageRes) {
      createIssueCtrl.issue.imageUrl = imageRes.data.url;
    }

    return geolocation.getLocation().then(function(data){
      var x = data.coords.latitude;
      var y = data.coords.longitude;

      // if some optional inputs are undefined, set them to null


      if(!createIssueCtrl.tags){
        var tags=[];
      }else{
        // we split the user input seperated by coma to create the right tags

        var tags = createIssueCtrl.tags.replace(/\s+/g, '');
        tags = tags.split(',');
      }


      // we call the service to create the issue

      return IssueService.createIssue(createIssueCtrl.issue.description, createIssueCtrl.issue.imageUrl, createIssueCtrl.issue.issue_type.href, tags, x, y).then(function(res) {

        // go to issue list
        createIssueCtrl.goBack();


      });

    });

  }
});
