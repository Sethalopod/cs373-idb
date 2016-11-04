mainApp.controller('CuisinesCtrl',
    ['$scope', 'CuisineFetchFactory',
    function($scope, CuisineFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.currentPage  = 1; 

        CuisineFetchFactory.fetch().success(function(data) {
            $scope.cuisines = data["cuisines"]
        });
    }]);

mainApp.controller('CuisineDetailCtrl',
    ['$scope', '$routeParams', 'CuisineFetchFactory',
    function($scope, $routeParams, CuisineFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 

        CuisineFetchFactory.fetchRecipes($routeParams['cuisineId']).success(function(data) {
            $scope.cuisine = data["cuisine"]
            $scope.recipes = data["recipes"]
        });
    }]);

mainApp.controller('RecipesCtrl',
    ['$scope', 'RecipeFetchFactory', 
    function($scope, RecipeFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.currentPage  = 1; 
        
        RecipeFetchFactory.fetch().success(function(data) {
            $scope.recipes = data["recipes"]
        });
    }]);

mainApp.controller('RecipeDetailCtrl',
    ['$scope', '$routeParams', 'RecipeFetchFactory',
    function($scope, $routeParams, RecipeFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 

        RecipeFetchFactory.fetchIngredients($routeParams['recipeId']).success(function(data) {
            $scope.recipe = data["recipe"]
            $scope.ingredients = data["ingredients"]
            $scope.cuisine = data["cuisine"]
        });
    }]);

mainApp.controller('IngredientsCtrl',
    ['$scope', 'IngredientFetchFactory', 
    function($scope, IngredientFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.currentPage  = 1; 
        
        IngredientFetchFactory.fetch().success(function(data) {
            $scope.ingredients = data["ingredients"]
        });
    }]);

mainApp.controller('IngredientDetailCtrl',
    ['$scope', '$routeParams', 'IngredientFetchFactory',
    function($scope, $routeParams, IngredientFetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 

        IngredientFetchFactory.fetchAt($routeParams['ingredientId']).success(function(data) {
            $scope.ingredient = data
        });
    }]);

mainApp.controller('AboutCtrl',
    ['$scope', 'GithubFetchFactory', 'IssueFetchFactory', 'MetadataFetchFactory',
    function($scope, GithubFetchFactory, IssueFetchFactory, MetadataFetchFactory) {
        stats               = {issues:0, tests:0, commits:0};
        refineData          = {};
        totalCommit         = 0;

        GithubFetchFactory.success(function(data) {
            for(var i = 0; i < data.length; i++) {
                author = data[i]['author']
                refineData[author.login] = {};
                refineData[author.login].avatar_url    = author.avatar_url;
                refineData[author.login].url           = author.html_url;
                refineData[author.login].contributions = data[i].total;
                refineData[author.login].issues        = 0;
                stats.commits   += data[i].total;
            }
        });
        // console.log(refineData)

        IssueFetchFactory.success(function(data) {
            for(var i = 0; i < data.length; i++) {
                refineData[data[i].user.login].issues += 1;
                stats.issues   += 1;
            }
        });

        $scope.members      = MetadataFetchFactory.fetchMember();
        for(var i = 0; i < $scope.members.length; i++) {
            stats.tests     += $scope.members[i].tests;
        }

        $scope.tools        = MetadataFetchFactory.fetchTool();
        $scope.dataUsed     = MetadataFetchFactory.fetchAPI();
        $scope.projects     = MetadataFetchFactory.fetchProject();
        $scope.sites        = MetadataFetchFactory.fetchSite();
        $scope.github       = refineData;
        $scope.stats        = stats;


    }]);

// Dependencies must be in the same order as the function paramters...
