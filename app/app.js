var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        })
				.state('admin', {
            url: '/admin',
            templateUrl: '/views/admin.html',
            controller: 'UserController'
        })
				.state('regular', {
            url: '/regular',
            templateUrl: '/views/regular.html',
            controller: 'UserController'
        })
				.state('register', {
            url: '/register',
            templateUrl: '/views/register.html',
            controller: 'RegisterController'
        });
}])
