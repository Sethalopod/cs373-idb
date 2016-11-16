mainApp.directive('search', function($http, $timeout) {
	return {
		restrict: 'EA',
		scope: {
			"placeholder": "@placeholder",
			"wait": "@wait"
		},
		templateUrl: '../static/partials/search.html',
		link: function($scope, elem, attrs) {
			$scope.results = null;
			$scope.query = null;
			$scope.searching = false;

			base_url = "/api/search?limit=5&query=";
			searchTimer = null;
			lastQuery = null;

			newSearch = function(newQuery, oldQuery) {
				return newQuery != oldQuery
			}

			searchTimerComplete = function(str) {
				console.log("searching for " + str)
				$http.get(base_url + str)
				.success(function(data) {
					$scope.searching = false;
					$scope.results = data["results"];
				})
				.error(function() {
					console.log("error");
				});
			}

			$scope.keyPressed = function(event) {
				if($scope.query == ""){
					console.log("serach is empty")
					$scope.results = null;
					$scope.$apply();

				}else if(newSearch($scope.query, lastQuery)){
					lastQuery = $scope.query;
					searching = true;
					searchTimer = $timeout(function() {
						searchTimerComplete($scope.query);
					}, $scope.wait);
				}
			}

			var inputField = elem.find('input');
			inputField.on('keyup', $scope.keyPressed);

		}
	};
});