mainApp.controller('CuisinesCtrl',
    ['$scope', 'CuisineFetchFactory', 
    function($scope, CuisineFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.cuisines     = CuisineFetchFactory.fetch()
    }]);

mainApp.controller('CuisineDetailCtrl',
    ['$scope', '$routeParams', 'CuisineFetchFactory',
    function($scope, $routeParams, CuisineFetchFactory) {
        $scope.cuisine = CuisineFetchFactory.fetchAt($routeParams['cuisineId']);
    }]);

mainApp.controller('RecipesCtrl',
    ['$scope', 'RecipeFetchFactory', 
    function($scope, RecipeFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.recipes     = RecipeFetchFactory.fetch()
    }]);

mainApp.controller('RecipeDetailCtrl',
    ['$scope', '$routeParams', 'RecipeFetchFactory',
    function($scope, $routeParams, RecipeFetchFactory) {
        $scope.recipe = RecipeFetchFactory.fetchAt($routeParams['recipeId']);
    }]);

mainApp.controller('IngredientsCtrl',
    ['$scope', 'IngredientFetchFactory', 
    function($scope, IngredientFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.ingredients     = IngredientFetchFactory.fetch()
    }]);

mainApp.controller('IngredientDetailCtrl',
    ['$scope', '$routeParams', 'IngredientFetchFactory',
    function($scope, $routeParams, IngredientFetchFactory) {
        $scope.recipe = IngredientFetchFactory.fetchAt($routeParams['ingredientId']);
    }]);

// Dependencies must be in the same order as the function paramters...