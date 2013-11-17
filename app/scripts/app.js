'use strict';

angular.module('motogpApp', ['motogpControllers','ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pilotos', {
        templateUrl: 'views/pilots-list.html',
        controller: 'pilotsListCtrl'
      })
      .when('/pilotos/:pilotoId', {
        templateUrl: 'views/pilot-detail.html',
        controller: 'pilotCtrl'
      })
      .when('/equipos/:equipoId', {
        templateUrl: 'views/team-detail.html',
        controller: 'teamCtrl'
      })
      .otherwise({
        redirectTo: '/pilotos'
      });
  });
