angular.module('NoteWrangler')
.controller('NotesTweetedController', ['$scope', 'Note', 'Tweetable', function($scope, Note, Tweetable) {
  $scope.notes = Note.query();
}]);