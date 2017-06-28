app.controller('singleChirp', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    //make get req to api for the single chirp
    var id = $routeParams.id
    $http({
        method: 'GET',
        url: 'api/chirps/' + id
    }).then(function(chirp) {
        $scope.chirp = chirp.data[0];
    }, function(err) {
        console.log(err);
    })
    //use bindings to make data show on screen


    //clicking deleteBtn should make DELETE req to server and redirect to list page
$scope.deleteChirp = function(id) {
    var confirm = confirm('Are you sure you want to Delete?');
    if(confirm){
        $http({
            method: 'DELETE',
            url: '/api/chirps/' + id
        }).then(function() {
            window.location.replace('/chirps');
        }, function(err) {
            console.log(err);
        });
    }
}

//closing of controller
}]);