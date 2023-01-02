angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', 'Tweetable', function($scope, Note, Tweetable) {
  Note.all().success(function(data) {
    $scope.notes = data;
  });

  $scope.tweetThatNote = function(noteToTweet) {
    Tweetable(noteToTweet).success(function(status) {
      console.log(status);
    });
  };
}]);