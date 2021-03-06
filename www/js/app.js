// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'citizen-engagement' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('citizen-engagement', [
  'ionic',
  'angular-storage',
  'geolocation',
  'leaflet-directive',
  'ion-floating-menu'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

angular.module('citizen-engagement').controller('MyCtrl', function($log) {
  var myCtrl = this;

});

angular.module('citizen-engagement').config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom");
});
angular.module('citizen-engagement').config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});

angular.module('citizen-engagement').config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // This is the abstract state for the tabs directive.
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // The three next states are for each of the three tabs.
    // The state names start with "tab.", indicating that they are children of the "tab" state.
    .state('tab.profile', {
      // The URL (here "/profile") is used only internally with Ionic; you never see it displayed anywhere.
      // In an Angular website, it would be the URL you need to go to with your browser to enter this state.
      url: '/profile',
      views: {
        // The "tab-profile" view corresponds to the <ion-nav-view name="tab-profile"> directive used in the tabs.html template.
        'tab-profile': {
          controller: 'ProfileCtrl',
          controllerAs: 'profileCtrl',
          templateUrl: 'templates/profile.html'
        }
      }
    })

    .state('tab.issueMap', {
      url: '/issueMap/:filters',
      views: {
        'tab-issueMap': {
          controller: 'MapCtrl',
          controllerAs: 'mapCtrl',
          templateUrl: 'templates/issueMap.html'
        }
      }
    })

    .state('tab.issueList', {
      url: '/issueList/:filters',
      views: {
        'tab-issueList': {
          controller: 'IssueCtrl',
          controllerAs: 'issueCtrl',
          templateUrl: 'templates/issueList.html'
        }
      }
    })


    // This is the issue details state from list.
    .state('issueDetails', {
      url: '/issueDetails/:issueId',
      controller: 'IssueDetailCtrl',
      controllerAs: 'issueDetailCtrl',
      templateUrl: 'templates/issueDetails.html'
    })

    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      controllerAs: "loginCtrl",
      templateUrl: 'templates/login.html'
    })

    .state('newUser', {
      url: '/newUser',
      controller: 'RegisterCtrl',
      controllerAs: 'registerCtrl',
      templateUrl: 'templates/newUser.html'
    })

    .state('editUser', {
      url: '/editUser',
      templateUrl: 'templates/editUser.html'
    })

    .state('mapFilters', {
      url: '/mapFilters',
      controller: 'FilterCtrl',
     controllerAs: 'filterCtrl',
     templateUrl: 'templates/filters.html'
    })

    .state('listFilters', {
      url: '/listFilters',
      controller: 'FilterCtrl',
     controllerAs: 'filterCtrl',
     templateUrl: 'templates/filters.html'
    })

    .state('addIssue', {
      url: '/addIssue',
      controller: 'CreateIssueCtrl',
      controllerAs: 'createIssueCtrl',
      templateUrl: 'templates/addIssue.html'
    })

    .state('editIssue', {
      url: '/editIssue',
      templateUrl: 'templates/editIssue.html'
    });





  // Define the default state (i.e. the first screen displayed when the app opens).
  $urlRouterProvider.otherwise(function($injector) {
    $injector.get('$state').go('tab.issueMap'); // Go to the issue map tab by default.
  });
});

angular.module('citizen-engagement').run(function(AuthService, $rootScope, $state) {

  // Listen for the $stateChangeStart event of AngularUI Router.
  // This event indicates that we are transitioning to a new state.
  // We have the possibility to cancel the transition in the callback function.
  $rootScope.$on('$stateChangeStart', function(event, toState) {

    // If the user is not logged in and is trying to access another state than "login"...
    if (!AuthService.authToken && toState.name != 'login' && toState.name != 'newUser') {

      // ... then cancel the transition and go to the "login" state instead.
      event.preventDefault();
      $state.go('login');
    }
  });
});
