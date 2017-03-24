angular.module('citizen-engagement').controller('IssueDetailCtrl', function(IssueService ,$stateParams, $scope, $ionicHistory) {
  // The $ionicView.beforeEnter event happens every time the screen is displayed.
  var issueDetailCtrl = this;

  issueDetailCtrl.goBack = function (){
    $ionicHistory.goBack();
  };

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
      return IssueService.addComment(id, issueDetailCtrl.text).then(function(comment) {
        issueDetailCtrl.comments.push(comment);
        issueDetailCtrl.text = "";
      });
    }
  });
});
