var mainApp = angular.module('mainApp', [
	'ngRoute',
	]);

mainApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: '../static/partials/home.html',
			controller: 'HomeCtrl'
		}).
		when('/about', {
			templateUrl: '../static/partials/about.html',
			controller: 'AboutCtrl'
		}).
		when('/cuisines', {
			templateUrl: '../static/partials/cuisines.html',
			controller: 'CuisinesCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);