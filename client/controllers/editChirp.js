app.controller('editChirp', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    //make GET req to api for single chirp
    var id = $routeParams.id
    $http({
        method: 'GET',
        url: 'api/chirps/' + id
    }).then(function(chirp) {
        $scope.chirp = chirp.data[0];
    }, function(err) {
        console.log(err);
    })
    //message of chirp in input box in the view using data binding


    //when submit btn is clicked, use data-binding to get new message and send PUT rew to server
    $scope.updateChirp = function(id) {
    var chirp = {
        message: $chirpField.val()
    };
    $http({
        method: 'PUT',
        url: '/api/chirps/' + id,
        data: chirp
    }).then(function(success) {
        //redirect back to list page
        window.location.replace('/chirps');
    }, function(err) {
        console.log(err);
    });
}

//controller closing  
}]);