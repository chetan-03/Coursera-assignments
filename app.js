(
	function () {
		angular.module('LunchCheck',[])
		.controller('LunchCheckController',LunchCheck)
		LunchCheck.$inject=['$scope']
		function LunchCheck($scope) {
			$scope.name = '';
			$scope.msg = '';
			$scope.color;
			$scope.Check = function () {
				var items = $scope.name.split(',');
				if ($scope.name == '') {
					$scope.color = 'red';
					$scope.msg = 'Please enter data first';
				}
				else if (items.length <= 3) {
						$scope.color = 'green';
						$scope.msg = 'Enjoy';
					}
				else if (items.length > 3) {
					if (items.length >=5) {
						$scope.color = 'green';
						$scope.msg = 'Too much';
					}
				}
		}
	}
})()