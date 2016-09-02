angular.module('suhp.auth', [])

.controller('AuthController', [function(Auth){
  var vm = this;
  vm.user = {};
  vm.userFound = Auth.userFound;
  vm.showSigninError = function(){
    return vm.userFound;
  }

//Sign up should check username availability

  vm.signup = function(){

    Auth.signup(vm.user)
      .then(function(response){
        //? establish response type client will receive from database
        // will need to receive a boolean indicating whether or not username is in db
                //if username is taken,
                  //then ng-show *username is taken, try another name
                //else change view to dashboard


      })
      .catch(function(error){
        console.log(error);
        alert('There was an error signing you up. Please refresh the page and try again.');
      });

  };

  // Triggers the auth function so it posts user information and directs them to dashboard

  vm.signin = function(){
    Auth.signin(vm.user)
      .then(function(){
        if(vm.userFound){
          $location.path('/dashboard');
        } else {
          // function for showing that signing in has a problem;
          showSigninError();
        }
      })
      .catch(function(error){
        console.log(error);
        alert('There was an error signing you in. Please refresh the page and try again.');
      });
  };

}]);
