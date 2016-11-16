var mainApp = angular.module('mainApp', [
	'ngRoute',
	'angularUtils.directives.dirPagination',
	]);
	
mainApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
		when('/', {
			templateUrl: '../static/partials/landing.html',
			// controller: 'HomeCtrl'
		}).
		when('/about', {
			templateUrl: '../static/partials/about.html',
		  	controller: 'AboutCtrl'
		}).
		when('/cuisines', {
			templateUrl: '../static/partials/cuisines.html',
			controller: 'CuisinesCtrl'
		}).
		when('/cuisines/:cuisineId', {
			templateUrl: '../static/partials/cuisineDetail.html',
			controller: 'CuisineDetailCtrl'
		}).
		when('/recipes', {
			templateUrl: '../static/partials/recipes.html',
			controller: 'RecipesCtrl'
		}).
		when('/recipes/:recipeId', {
			templateUrl: '../static/partials/recipeDetail.html',
			controller: 'RecipeDetailCtrl'
		}).
		when('/ingredients', {
			templateUrl: '../static/partials/ingredients.html',
			controller: 'IngredientsCtrl'
		}).
		when('/ingredients/:ingredientId', {
			templateUrl: '../static/partials/ingredientDetail.html',
			controller: 'IngredientDetailCtrl'
		}).
		otherwise({ redirectTo: '/' });

		// http://stackoverflow.com/questions/14771091/removing-the-fragment-identifier-from-angularjs-urls-symbol
		// Removing the fragment identifier from AngularJS urls (# symbol)
		if(window.history && window.history.pushState){
			$locationProvider.
			html5Mode({
				enabled: true,
				requireBase: false
			});
		}
	}]);
