
var myapp = angular.module('directiveModule');

myapp.directive('myCustomerdirective', function()
{
	return {
		template:' First Name is: {{firstName}} and Last name is {{lastName}}'
	}
});
