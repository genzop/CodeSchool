angular.module('NoteWrangler')
.factory('Tweetable', ['$http', function TweetableFactory($http) {
  var characterLength = 144;
  return function(potentialTweet) {
    return $http({
      method: 'POST',
      url: 'http://gentle-spire-1153.herokuapp.com/tweet',
      data: {
        description: potentialTweet,
        maxLength: characterLength
      }
    });
  };
}]);
