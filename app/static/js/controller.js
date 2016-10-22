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
    ['$scope', 'GithubFetchFactory', 'MetadataFetchFactory',
    function($scope, GithubFetchFactory, MetadataFetchFactory) {
        stats               = {issues:0, tests:0, commits:0}
        $scope.members      = MetadataFetchFactory.fetchMember();
        for(var i = 0; i < $scope.members.length; i++) {
            stats.issues    += $scope.members[i].issues
            stats.tests     += $scope.members[i].tests
        }
        $scope.tools        = MetadataFetchFactory.fetchTool();
        $scope.dataUsed     = MetadataFetchFactory.fetchAPI();
        $scope.project      = MetadataFetchFactory.fetchProject();

        GithubFetchFactory.success(function(data) {
        refineData          = {};
        totalCommit         = 0;
        for(var i = 0; i < data.length; i++) {
            refineData[data[i].login] = {}
            refineData[data[i].login].avatar_url = data[i].avatar_url
            refineData[data[i].login].html_url = data[i].url
            refineData[data[i].login].contributions = data[i].contributions
            stats.commits   += data[i].contributions
        }
        $scope.stats        = stats;
        $scope.github       = refineData;
        });

    }]);

// Dependencies must be in the same order as the function paramters...
