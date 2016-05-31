angular.module("myApp",[]).controller("nameCtrl",function($scope) {
	$scope.names = [
		{name:"jain",country:"norway"},
		{name:"hage",country:"sweden"},
		{name:"kai",country:"denmark"}
	];
});