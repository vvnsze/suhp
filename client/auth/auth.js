angular.module('suhp.auth', [])

.controller('AuthController', function($scope, Auth){
  $scope.user = {};

//Sign up should check username

//? Do we need to handle

  $scope.signup = function(){
    Auth.signup($scope.user);
      .then(function(response){
        //if username is taken,
          //then ng-show *username is taken, try another
        //else change view to dashboard
        if (response.data.)
        $location.path('/dashboard');
      })
      .catch(function(error){
        console.log(error);
        alert('There was an error signing you up. Please refresh the page and try again.');
      })

  };

  // Triggers the auth function so it posts user information and directs them to dashboard
  $scope.signin = function(){
    Auth.signin($scope.user)
      .then(function(){
        $location.path('/dashboard');
      })
      .catch(function(error){
        console.log(error);
        alert('There was an error signing you in. Please refresh the page and try again.');
      });
  };

})
