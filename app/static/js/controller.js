mainApp.controller('CuisinesCtrl',
    ['$scope', 'FetchFactory', 
    function($scope, FetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.cuisines     = FetchFactory.fetch()
    }]);

mainApp.controller('CuisineDetailCtrl',
    ['$scope', '$routeParams', 'FetchFactory',
    function($scope, $routeParams, FetchFactory) {
        $scope.cuisine = FetchFactory.fetchAt($routeParams['cuisineId']);
    }]);

// Dependencies must be in the same order as the function paramters...