angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', '$http', function($scope, $http) {
  $http({method: 'GET', url: '/notes'}).success(function(data) {
    $scope.notes = data;
  });
}]);
