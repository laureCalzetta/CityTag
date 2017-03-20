angular.module('citizen-engagement').controller('IssueDetailCtrl', function(IssueService ,$stateParams, $scope) {
  // The $ionicView.beforeEnter event happens every time the screen is displayed.
  var issueDetailCtrl = this;
  $scope.$on('$ionicView.beforeEnter', function() {

    // Re-initialize the user object every time the screen is displayed.
    // The first name and last name will be automatically filled from the form thanks to AngularJS's two-way binding.

    var id = $stateParams.issueId;

    IssueService.getIssue(id).then(function(issue) {
      issueDetailCtrl.issue = issue;
    });
    IssueService.getIssueComments(id).then(function(comments) {
      issueDetailCtrl.comments = comments;
    });

    issueDetailCtrl.addComment = function(){
      console.log("click");
      return IssueService.addComment(id, issueDetailCtrl.text).then(function(comment) {
        issueDetailCtrl.comments.push(comment);
        issueDetailCtrl.text = "";
      });
    }
  });







  /*singleCtrl.addComment = function(){
    // requete get
    // creation du resultat ou pas?


    return $http({
      method: 'POST',
      url: apiUrl+'/issues/'+$scope.issue.id+'/comments',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {"text": singleCtrl.comment},
      params: {include: 'author'}

    }).then(function(res) {

      // If successful, give the token to the authentication service.

     $scope.comments.push(res.data);
     console.log(res);
     singleCtrl.comment ="";
     return res.data;

    }).catch(function() {
      singleCtrl.comment.error = "Please you have to add some content to your comment";
      // If an error occurs, hide the loading message and show an error message.


    });

  }*/

  function getCurrentUser(){
    // requete get

    return $http({
      method: 'GET',
      url: apiUrl+'/me',

    }).then(function(res) {

      // If successful, give the token to the authentication service.
     return res.data;

    }).catch(function() {

      console.log("error no user found");

    });

  }



});
