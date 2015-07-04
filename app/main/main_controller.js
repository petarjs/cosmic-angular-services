(function(){
  'use strict';


  angular.module('cosmic-angular-main',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        });
    })
    .controller('MainCtrl', function ($scope) {

      $scope.services = [{
        id: 1,
        name: 'Web Development',
        price: '300'
      }, {
        id: 2,
        name: 'Design',
        price: '400'
      }, {
        id: 3,
        name: 'Integration',
        price: '250'
      }, {
        id: 4,
        name: 'Training',
        price: '220'
      }];

      $scope.isSelected = {};

      $scope.selectService = function(service) {
        $scope.isSelected[service.id] = !$scope.isSelected[service.id];
      };

      $scope.getPrice = function() {
        var price = 0;
        var currentId;
        for (var i = $scope.services.length - 1; i >= 0; i--) {
          currentId = $scope.services[i].id;
          if($scope.isSelected[currentId]) {
            price += parseInt($scope.services[i].price, 10);
          }
        };
        return price;
      };

    });

})();