//contains all client-side services for signup, signin, and dashboard

angular.module('suhp.services', [])

.factory('Auth', function($http){
  //factory to post username to database upon signup
  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/signup',
      data: user
    })
    .then(function(response){
      return response.data;
    })
    .catch(function(error){
      console.error('Error in services.factory.signup');
    });
  };

  //factory to post email friend list to designated table within db
  var storeFriendEmailList = function(friendEmailList) {
    return $http({
      method: 'POST',
      url: '/email',
      data: friendEmailList
    })
    .then(function(response){
      return response.data;
    })
    .catch(function(error){
      console.error('Error in services.factory.signup');
    });
  };


  var signin = function(userobj){
    return;
  };


  return {
    signup : signup,
    postFriendEmailList : postFriendEmailList,
    signin: signin
  }

})




//factory function for user dashboard, will handle post requests for
.factory('Dashboard', function($http){
  var getUserGoals = function(){
    return $http({
      method: 'GET',
      url: '/goals'
    })
    .then(function(response){
      return response.data
    })
    .catch(function(error){
      console.error('There was an error retrieving your data')
    })
  }

  var storeUserGoals = function(userGoal){
      return $http({
        method: 'POST',
        url: '/goals',
        data: userGoal
            // should data be {
            //   "username": username,
            //   "description": description,
            //   "deadline": deadline,
            //   "hasExpired": false,
            //   "hasCompleted": false
            // }
      });
  };

  return {
    getUserGoals : getUserGoals,
    storeUserGoals: storeUserGoals
  }

});
