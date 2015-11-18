var myApp = angular.module('myApp', []);

myApp.value('ClientId','ABCDEFGHI');


myApp.factory('ApiKey',['ClientId', function(ClientId){

return ClientId;

}])
