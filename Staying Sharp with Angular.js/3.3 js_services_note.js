angular.module('NoteWrangler')
.factory('Note', ['$http', function NoteFactory($http) {
  return {
    all: function() {
      return $http({method: 'GET', url: '/notes'});
    }
  };
}]);