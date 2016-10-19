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
			controller: 'AboutvendorsCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);