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
        $scope.cuisine      = CuisineFetchFactory.fetchAt($routeParams['cuisineId']);
    }]);

mainApp.controller('RecipesCtrl',
    ['$scope', 'RecipeFetchFactory', 
    function($scope, RecipeFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.recipes      = RecipeFetchFactory.fetch()
    }]);

mainApp.controller('RecipeDetailCtrl',
    ['$scope', '$routeParams', 'RecipeFetchFactory',
    function($scope, $routeParams, RecipeFetchFactory) {
        $scope.recipe       = RecipeFetchFactory.fetchAt($routeParams['recipeId']);
    }]);

mainApp.controller('IngredientsCtrl',
    ['$scope', 'IngredientFetchFactory', 
    function($scope, IngredientFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.ingredients  = IngredientFetchFactory.fetch()
    }]);

mainApp.controller('IngredientDetailCtrl',
    ['$scope', '$routeParams', 'IngredientFetchFactory',
    function($scope, $routeParams, IngredientFetchFactory) {
        $scope.ingredient   = IngredientFetchFactory.fetchAt($routeParams['ingredientId']);
    }]);

mainApp.controller('AboutCtrl',
    ['$scope', 'MemberFetchFactory', 'ToolFetchFactory', 'DataUsedFetchFactory', 'GithubFetchFactory',
    function($scope, MemberFetchFactory, ToolFetchFactory, DataUsedFetchFactory, GithubFetchFactory) {
        $scope.members      = MemberFetchFactory.fetch();
        $scope.tools        = ToolFetchFactory.fetch();
        $scope.dataUsed     = DataUsedFetchFactory.fetch();
        GithubFetchFactory.success(function(data) {
            refineData      = {};

            for(var i = 0; i < data.length; i++) {
                refineData[data[i].login] = {}
                refineData[data[i].login].avatar_url = data[i].avatar_url
                refineData[data[i].login].url = data[i].url
                refineData[data[i].login].contributions = data[i].contributions
            }
            $scope.github   = refineData;
        });

    }]);

// Dependencies must be in the same order as the function paramters...
