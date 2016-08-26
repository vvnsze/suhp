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
      return response.data
    })
    .catch(function(error){
      return error
    })
  }
  //factory to post email friend list to designated table within db
  var postFriendEmailList = function(friendEmailList) {
    return $http({
      method: 'POST',
      url: 'endpoint for list of friends e-mails',
      data: friendEmailList
    })
    .then(function(response){
      response.data
    })
    .catch(function(error){
      return error
    })
  }

  return {
    signup : signup,
    postFriendEmailList : postFriendEmailList
  }
}
