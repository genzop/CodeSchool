angular.module('NoteWrangler')
.factory('Note', function NoteFactory($resource) {
  return $resource("/notes", {}, {});  
});