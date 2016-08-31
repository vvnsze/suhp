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

  return {
    signup : signup,
    postFriendEmailList : postFriendEmailList
  }//closing for return object
}); //closing bracket for factory
