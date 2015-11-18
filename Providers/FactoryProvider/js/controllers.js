var myApp = angular.module('myApp');
myApp.controller('MyController', ['$scope','ApiKey',function ($scope,ApiKey) 
{ 
    $scope.ApiKey = ApiKey;
}]);     