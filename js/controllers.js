angular.module('myControllers',[]).controller('testController',['$scope',function($scope){
	$scope.title = "Welcome To AngularJs"
	$scope.double= function(value){	return 2*value;};

}]);

var myModule = angular.module('myControllers');

myModule.controller('parentController',['$scope',function($scope){
	$scope.name="Ravi";
	$scope.timeoftheDay="Good Morning";	
}]);

myModule.controller('childController',['$scope',function($scope){
	$scope.name="Raj";
}]);


myModule.controller('grandChildController',['$scope',function($scope){
	$scope.name="RaviRaj";
	$scope.timeoftheDay="Good evening";
}]);


