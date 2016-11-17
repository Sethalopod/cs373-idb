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

        IngredientFetchFactory.fetchRecipes($routeParams['ingredientId']).success(function(data) {
            $scope.ingredient = data["ingredient"]
            $scope.recipes = data["recipes"]
        });
    }]);

mainApp.controller('AboutCtrl',
    ['$scope', '$http', 'GithubFetchFactory', 'IssueFetchFactory', 'MetadataFetchFactory',
    function($scope, $http, GithubFetchFactory, IssueFetchFactory, MetadataFetchFactory) {
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
        $scope.tests        = null;

        $scope.runUnittests = function () {
            $http.get('/test').success(function(data) {
                $scope.tests = data
            });
        }
    }]);

mainApp.controller('PokemonCtrl',
    ['$scope', 'PokemonFetchFactory',
    function($scope, PokemonFetchFactory) {
        $scope.pokemon = ['Loading...','Loading...', 'Loading...','Loading...','Loading...']
        $scope.moves = ['Loading...','Loading...', 'Loading...','Loading...','Loading...']

        PokemonFetchFactory.fetch().success(function(result) {
            $scope.pokemon = result['data'];
        });

        PokemonFetchFactory.fetchMoves().success(function(result) {
            $scope.moves = result['data'];
        });

        $scope.name = '';
        $scope.selectedMoves = [-1, -1];
        $scope.selectedDesc = -1;

        $scope.getName = function(){
            if($scope.name == ''){
                return 'Your Pokemon';
            }
            return $scope.name
        }

        $scope.getDescription = function(index){
            if(index == -1){

                return 'Please Select A PokeDex Entry Above'
            }
            return $scope.pokemon[index];
        }

        $scope.selectMove = function(index) {
            if($scope.selectedMoves[0] != index && $scope.selectedMoves[1] != index){
                $scope.selectedMoves[1] = $scope.selectedMoves[0];
                $scope.selectedMoves[0] = index;
            }
        }

        $scope.getMove = function(index) {
            if(index === -1)
                return 'Please Select A Move Above'
            return $scope.moves[index];
        }
    }]);


// Dependencies must be in the same order as the function paramters...
