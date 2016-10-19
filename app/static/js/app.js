var mainApp = angular.module('mainApp', [
	'ngRoute',
	]);

mainApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
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
		when('/cuisines/:cuisineId', {
			templateUrl: 'partials/phone-detail.html',
			controller: CuisineDetailCtrl
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