//contains all client-side services for signup, signin, and dashboard

angular.module('suhp.services', [])

.factory('Auth', $http) {
  //factory to post username to database upon signup
  var signup = function(user){
    return $http({
      method: 'POST',
      url: 'endpoint for user table',
      data: user
    })
    .then(function(response){
      return response.data;
    })
    .catch(function(error){
      console.error('Error in services.factory.signup');
    });
  }

  //factory to post email friend list to designated table within db
  var storeFriendEmailList = function(friendEmailList) {
    return $http({
      method: 'POST',
      url: 'endpoint for list of friends e-mails',
      data: friendEmailList
    })
    .then(function(response){
      return response.data;
    })
    .catch(function(error){
      console.error('Error in services.factory.signup');
    });
  }

  return {
    signup : signup,
    postFriendEmailList : postFriendEmailList
  }
}

//factory function for user dashboard, will handle post requests for
.factory('Dashboard', $http) {
  var getUserGoals = function(userGoals){
    return $http({
      method: 'GET',
      url: '/goals'
      data: userGoals
    })
    .then(function(response){
      return response.data
    })
    .catch(function(error){
      console.error('There was an error retrieving your data')
    })
  }

  var storeUserGoals = function(userGoalList){
      return $http({
        method: 'POST',
        url: '/goals',
        data: userGoalList
            // should data be {
            //   "username": username,
            //   "description": description,
            //   "deadline": deadline,
            //   "hasExpired": false,
            //   "hasCompleted": false
            // }
      })
      .then(function(response){
        console.log('Successful POST request')
      })
      .catch(function(error){
        console.error('There was an error sending data to the database')
      })
  }



  return {
    getUserGoals : getUserGoals,
    storeUserGoals: storeUserGoals
  }

}
