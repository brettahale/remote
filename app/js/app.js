'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
   'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
  $routeProvider.when('/security', {templateUrl: 'partials/security.html', controller: 'securityController'});
  $routeProvider.when('/lights', {templateUrl: 'partials/lighting.html', controller: 'lightingController'});
  $routeProvider.when('/music', {templateUrl: 'partials/music.html', controller: 'musicController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]).
config(['$httpProvider',function($httpProvider){
    //$httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + btoa('admim:drPepper21');
    //$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  }]);


