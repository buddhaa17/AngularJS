var myApp = angular.module('directiveModule',[]);

myApp.controller('directiveController',['$scope', function($scope){
	
	$scope.firstName = "buddha";
	$scope.lastName = "kamble";

}]);
