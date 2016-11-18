mainApp.directive('search', function($http, $timeout) {
	return {
		restrict: 'EA',
		scope: {
			"placeholder": "@placeholder",
			"wait": "@wait",
			"userLimit": "@limit"
		},
		templateUrl: '../static/partials/search.html',
		link: function($scope, elem, attrs) {
			$scope.results = null;
			$scope.query = null;
			$scope.searching = false;

			searchTimer = null;
			lastQuery = null;
			limit = 5;

			if ($scope.userLimit) {
                limit = $scope.userLimit;
            }

			base_url = "/api/search?limit=" + limit + "&query=";


			newSearch = function(newQuery, oldQuery) {
				return newQuery != oldQuery
			}

			searchTimerComplete = function(str) {
				console.log("searching for " + str)
				$http.get(base_url + str)
				.success(function(data) {
					$scope.results = data["results"];
					$scope.searching = false;
				})
				.error(function() {
					console.log("error");
				});
			}

			let timer;

			$scope.keyPressed = function(event) {
				clearTimeout(timer);
				if ($scope.query != ""){
					$scope.searching = true;
					timer = setTimeout(doSearch, $scope.wait);
				}
				else{
					console.log("search is empty");
					$scope.results = null;
					$scope.$apply();
				}
			}

			doSearch = function() {
				if(newSearch($scope.query, lastQuery)){
					lastQuery = $scope.query;
					searchTimer = $timeout(function() {
						searchTimerComplete($scope.query);
					});
				}
			
			}

			var inputField = elem.find('input');
			inputField.on('keyup', $scope.keyPressed);

		}
	};
});