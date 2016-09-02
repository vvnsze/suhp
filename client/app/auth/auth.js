angular.module('suhp.auth', [])

.controller('AuthController', [function(Auth){
  var vm = this;
  vm.user = {};
  vm.user.emails =[];
  vm.userFound = Auth.userFound;
  vm.showSigninError = function(){
    return vm.userFound;
  };
  vm.usernameTaken;

//Sign up should check username availability

  vm.signup = function(){

    Auth.signup(vm.user)
      .then(function(response){

        //run a function that hides the entire sign up section and just shows the friends list

      })
      .catch(function(error){
        usernameTaken = true;
        console.log(error);
      });

  };

  vm.storeFriendEmailList = function(){
    Auth.storeFriendEmailList()
  }

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
