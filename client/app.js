var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            // controller: 'welcomeLanding'
        })
        .when('/chirps', {
            templateUrl: 'views/list.html',
            controller: 'chirpList'
        })
        .when('/chirps/:id', {
            templateUrl: 'views/single_view.html',
            controller: 'singleChirp'
        })
        .when('/chirps/:id/update', {
            templateUrl: 'views/single_update.html',
            controller: 'editChirp'
        })
        .otherwise({
            redirectTo: '/'
        });
        
}]);
// .controller('welcomeLanding', ['$scope', function($scope) {
//    //may add functionality to later
// }])