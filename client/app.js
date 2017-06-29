angular.module('myApp', ['myApp.controllers', 'myApp.factories', 'ngRoute', 'ngResource'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            // controller: 'welcomeLanding'
        })
        .when('/chirps', {
            templateUrl: 'views/list.html',
            controller: 'ChirpListController'
        })
        .when('/chirps/:id', {
            templateUrl: 'views/single_view.html',
            controller: 'SingleChirpController'
        })
        .when('/chirps/:id/update', {
            templateUrl: 'views/single_update.html',
            controller: 'UpdateChirpController'
        })
        .otherwise({
            redirectTo: '/'
        });
        
}]);