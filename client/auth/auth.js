angular.module('suhp.auth', [])

.controller('AuthController', function($scope, Auth){
  $scope.user = {};

//Sign up should check username

//? Do we need to handle

  $scope.signup = function(){
    Auth.signup($scope.user);
      .then(function(response){
        $location.path('/dashboard');
      })
      .catch(function(error){
        console.log(error);
        $location.path('/404page');
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
        $location.path('/404page');
      });
  };

})
