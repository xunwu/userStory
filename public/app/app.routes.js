angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/home.html',
            controller: 'MainController',
            controllerAs:'main'
		})
		.when('/login', {
			templateUrl: 'app/views/login.html'
		})
		.when('/signup', {
			templateUrl: 'app/views/signup.html'
		})

	$locationProvider.html5Mode(true);
})