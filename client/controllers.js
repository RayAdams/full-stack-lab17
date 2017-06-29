angular.module('myApp.controllers', [])
.controller('ChirpListController', ['$scope', 'Chirp', 'User', function($scope, Chirp, User) {
    $scope.chirps = Chirp.query();
    $scope.users = User.query();
    $scope.messageToPost = '';

    $scope.createChirp = function() {
        var c = new Chirp ({
            userid: $scope.selectedUser, 
            message: $scope.messageToPost
        });
        c.$save(function(success) {
            $scope.chirps = Chirp.query();
            $scope.selectedUser = '';
            $scope.messageToPost = '';
        });
    }
}])
.controller('SingleChirpController', ['$scope', 'Chirp', '$routeParams', function($scope, Chirp, $routeParams) {
    $scope.chirp = Chirp.get({id: $routeParams.id});

    $scope.deleteChirp = function() {
        if(confirm('Are you sure you want to delete?')){
            $scope.chirp.$delete(function() {
                window.history.back();
            }, function(err) {
                console.log(err);
            });
        }
    }
}])
.controller('UpdateChirpController', ['$scope', 'Chirp', '$routeParams', function($scope, Chirp, $routeParams) {
    var chirpFactory = Chirp.get({id: $routeParams.id});
    $scope.chirp = chirpFactory;
    $scope.updateChirp = function() {
        chirpFactory.message = $scope.messageToPost;
        chirpFactory.$update();
        window.history.back();
    }
}]);
