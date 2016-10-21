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
        $scope.ingredient = IngredientFetchFactory.fetchAt($routeParams['ingredientId']);
    }]);

mainApp.controller('AboutCtrl',
    [ '$scope', 'MemberFactory',
    function($scope, MemberFactory) {
        console.log("Member Factory fetch start");
        members = MemberFactory.fetch();
        $scope.seth = members[0];
        $scope.alan = members[1];
        $scope.anthony = members[2];
        $scope.jessica = members[3];
        $scope.zach = members[4];
	$scope.tools = [
		{ name: 'AngularJS', link: 'https://angularjs.org/'},
		{ name: 'BootstrapJS', link: 'http://getbootstrap.com/'},
		{ name: 'Flask', link: 'http://flask.pocoo.org/'},
		{ name: 'Apiary', link: 'https://apiary.io/'},
                { name: 'SQLAlchemy', link: 'http://www.sqlalchemy.org/'},
		{ name: 'yUML', link: 'http://yuml.me/'}
	];
	$scope.dataUsed = [
		{name: 'FoodFacts', link: 'https://api.foodfacts.com/'},
		{name: 'Spoonacular', link: 'https://market.mashape.com/spoonacular/recipe-food-nutrition'}
	]
        console.log("Member Factory fetch end");
    }]
).directive('memberDetail', function() {
  return {
    scope: {
      info: '=info'
    },
    templateUrl: '/static/partials/memberDetail.html'
  }
});;

// Dependencies must be in the same order as the function paramters...
