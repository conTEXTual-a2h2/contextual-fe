'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

angular.module('myApp', [
  'ui.router',
  //'myApp.view1',
  //'myApp.view2',
  //'myApp.version'
]).
  config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state({
        name: 'discharge',
        url: '/',
        templateUrl: 'discharge/discharge.html',
        controller: 'DischargeController as discharge'
      })
      .state({
        name: 'review',
        url: '/review',
        templateUrl: 'review/review.html',
        controller: 'ReviewController as review'
      })
    $urlRouterProvider.otherwise('/');
  }]);
