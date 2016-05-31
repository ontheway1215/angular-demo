angular.module("myApp",[]).controller("personCtrl",function($scope) {
	$scope.firstName = "john",
	$scope.lastName = "doe",
	$scope.fullName = function (){
		return $scope.firstName + " " +$scope.lastName;
	}
	
})