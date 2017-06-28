app.controller('chirpList', ['$scope', '$http', function($scope, $http) {
    //make 2 GET reqs to api for all chirps and all users
    $scope.getChirps = function() {
        $http({
            method: 'GET',
            url: '/api/chirps'
        }).then(function(chirps) {
            $scope.chirps = chirps.data;
        }, function(err) {
            console.log(err);
        });
    }

getChirps();


$http({
    method: 'GET',
    url: '/api/users'
}).then(function(users) {
    $scope.users = users.data;
}, function(err) {
    console.log(err);
});
    //show chirps on screen using ng-repeat

$scope.postChirp = function() {
    var chirp = {
        userid: $userSelector.val(),
        message: $chirpField.val()
    };
    $http({
        method: 'POST',
        url: '/api/chirps',
        contentType: 'application/json',
        data: chirp
    }).then(function(success) {
        $chirpField.val('');
        $chirpButton.prop('disabled', true);
        getChirps();
    }, function(err) {
        console.log(err);
    });
}

    //chirps should link to single view
    //use ng-repeat to populate the user select box



// var $chirpButton = $('#chirp-btn');
// var $chirpField = $('#chirp-field');
// var $chirpList = $('#chirp-list');
// var $userSelector = $('#user-selector');

// $chirpButton.click(postChirp);

// //chirp button disable logic 
//  $chirpField.on('input', function(){
//     var isEmpty = $chirpField.val().length === 0;
//         $chirpButton.prop('disabled', isEmpty);
//  });



//closing of controller  
}])
