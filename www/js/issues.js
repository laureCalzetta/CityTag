angular.module('citizen-engagement').factory('IssueService', function($http) {
  var service = {};

  service.getIssues = function(){
    $http.get(apiUrl).then(function(res) {
      console.log(res);
    });
  }

  return service;
});

angular.module('citizen-engagement').controller('IssueController', function(IssueService) {
  var ctrl = this;
  ctrl.issues = IssueService.getIssues();
  
});
