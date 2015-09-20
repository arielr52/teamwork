'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone','Peoples',
  function($scope, Phone,Peoples) {
    $scope.phones = Phone.query();
    $scope.peoples = Peoples.query();
    $scope.orderProp = 'age';
    $scope.category = 'Overall';
    $scope.categories = ['Overall','Java','AngularJS','SQL','QA','Requirements'];
    $scope.getRating= function(person){
      console.log(person);
      var rate= person.categories.filter(function(value){
        return value.category==$scope.category})[0].rate;
      return rate;
    }
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
