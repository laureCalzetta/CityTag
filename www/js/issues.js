angular.module('citizen-engagement').factory('IssueService', function($http, apiUrl) {
  var service = {};

  //Get all issues
  service.getIssues = function() {
    return $http({
      method: 'GET',
      url: apiUrl + '/issues'
    }).then(function(res) {
      return res.data;
    }).catch(function(err) {
      $log.error(err);
    });
  };

  return service;
});

angular.module('citizen-engagement').controller('IssueCtrl', function(IssueService) {
  var issueCtrl = this;

  IssueService.getIssues().then(function(issues) {
    issueCtrl.issues = issues;
  })


});
