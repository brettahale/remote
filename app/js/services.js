'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  value('version', '0.1').
  factory('ISY',['$resource',IsyResource]);


function IsyResource($resource){

  return $resource('http://192.168.3.123/rest/batch',{},{
    query: {method:'GET'}
  })
}