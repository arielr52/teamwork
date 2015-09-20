'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

phonecatServices.factory('Peoples', ['$resource',
  function($resource){
    return $resource('peoples/peoples.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);



/*
 Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, Blitzen
 */