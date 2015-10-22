var customFilter = angular.module('customFilter',[]);

customFilter.controller('customFilterController',['$scope', function($scope){

		$scope.products = [
							{'Name':'KingFisher','Price':120},
							{'Name':'Toubourg','Price':200},
							{'Name':'Budwiser', 'Price':250},
							{'Name':'Khajuraho', 'Price':150},
							{'Name':'Asahi', 'Price':230},
							{'Name':'carlsberg', 'Price':270}
						  ];

						  $scope.min=0;
						  $scope.max=270;

}]);
