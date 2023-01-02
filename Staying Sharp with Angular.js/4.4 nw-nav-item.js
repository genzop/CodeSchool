angular.module('NoteWrangler')
.directive('nwNavItem', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-nav-item.html',
    require: '^nwNav',
    link: function(scope, element, attrs, nwNavCtrl) {
      scope.isActive = function() {
        return nwNavCtrl.getActiveNav() === scope.name;
      };
      scope.activate = function() {
        nwNavCtrl.setActiveNav(scope.name);
      };
    },
    scope: {
      name: '@'
    },
  };
});