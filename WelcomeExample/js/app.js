var myApp = angular.module('myApp',['myControllers','ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/inheritance',{
		templateUrl: 'Inheritance.html'
	}).when('/home',{
		templateUrl : 'Double.html',
		controller: 'testController'
	}).otherwise({
		redirectTo:'/Home'
	})
}]);