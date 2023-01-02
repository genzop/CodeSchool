angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', function($scope, Note) {
  Note.all().success(function(data){
    $scope.notes = data;
  });
}]);