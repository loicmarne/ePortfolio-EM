'use strict';

/**
 * @ngdoc overview
 * @name ePortfolioEmApp
 * @description
 * # ePortfolioEmApp
 *
 * Main module of the application.
 */
angular
  .module('ePortfolioEmApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl',
        controllerAs: 'cv'
      });
      /*.otherwise({
        redirectTo: '/'
      });*/
  });
