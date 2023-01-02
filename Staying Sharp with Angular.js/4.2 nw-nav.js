angular.module('NoteWrangler')
.directive('nwNav', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.activeNav = 'Notes';    
      
      this.getActiveNav = function(){
        return $scope.activeNav;
      };
      
      this.setActiveNav = function(newValue){
        $scope.activeNav = newValue;
      };
      return this;
    }
  };
});