'use strict';

var motogpControllers = angular.module('motogpControllers', []);

motogpControllers.controller('pilotsListCtrl',
 function ($scope, $http) {
  $http.get('datos/pilotos.json').success(function(data) {
    $scope.pilotos = data;
   });
});

motogpControllers.controller('pilotCtrl',
  function($scope, $routeParams, $http) {
    $http.get('datos/' + $routeParams.pilotoId + '.json').success(function(data) {
      $scope.piloto = data;
    });
});

motogpControllers.controller('teamCtrl',
  function($scope, $routeParams, $http) {
    $http.get('datos/' + $routeParams.equipoId + '.json').success(function(data) {
      $scope.equipo = data;
    });
});
