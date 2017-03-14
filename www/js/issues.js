angular.module('citizen-engagement').factory('IssueService', function($scope) {
  var service = {};

  service.helloWorld = function(){
    return "Hello World";
  }

  return service;
});

angular.module('citizen-engagement').controller('IssueController', function(IssueService) {
  var ctrl = this;
  
  IssueService.helloWorld().then(function(hello) {
    ctrl.hello = hello;
  });
});
