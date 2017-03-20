angular.module('citizen-engagement').factory('IssueService', function($http, apiUrl) {
  var service = {};

  //Get all issues
  service.getIssues = function(page, items) {
    page = page || 1; // Start from page 1
    items = items || [];
      // GET the current page
      return $http({
        method: 'GET',
        url: apiUrl + '/issues',
        params: {
          page: page,
          pagesize: 50
        }
      }).then(function(res) {
        if (res.data.length) {
          // If there are any items, add them
          // and recursively fetch the next page
          items = items.concat(res.data);
          return service.getIssues(page + 1, items);
        }
        return items;
      });
  };

  //Get one issue
  service.getIssue = function (id){
    return $http({
      method: 'GET',
      url: apiUrl + '/issues/'+ id
    }).then(function(res) {
      return res.data;
    }).catch(function() {
      // If an error occurs, hide the loading message and show an error message.
      console.log("error no such issue");

    });
  };

    service.getIssueComments = function(id, page, items) {
      page = page || 1; // Start from page 1
      items = items || [];
        // GET the current page
        return $http({
          method: 'GET',
          url: apiUrl+'/issues/'+ id +'/comments?include=author',
          params: {
            page: page
          }
        }).then(function(res) {

          if (res.data.length) {
            // If there are any items, add them
            // and recursively fetch the next page
            items = items.concat(res.data);
            return service.getIssueComments(id ,page + 1, items);
          }

          return items;
        });
    };


    service.addIssue = function(issue){
      return $http({
        method: 'POST',
        url: apiUrl+'/issues',
        headers: {
          'Content-Type': 'application/json'
        },
        data: issue
      }).then(function(res) {

        // ajout réussi

      }).catch(function(err) {
        console.log("Error adding issue");

      });
    }

    service.addComment = function(id, text){
    return $http({
      method: 'POST',
      url: apiUrl+'/issues/'+ id +'/comments',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {"text": text},
      params: {include: 'author'}

    }).then(function(res) {
     return res.data;

    }).catch(function(err) {
      console.log(err);


    });

  }

  return service;

});

angular.module('citizen-engagement').controller('IssueCtrl', function(IssueService, $ionicHistory) {
  var issueCtrl = this;

  issueCtrl.goBack = function (){
    $ionicHistory.goBack();
  };

  IssueService.getIssues().then(function(issues) {
    issueCtrl.issues = issues;
  })
});
