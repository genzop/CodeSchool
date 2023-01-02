angular.module('NoteWrangler')
.directive('popover', function($timeout) {
  return function(scope, element, attrs) {
    $timeout( function(){
      element.popover({trigger: 'hover',
                       content: attrs.popover});
    });
    scope.$on('$destroy', function(){
      element.popover('destroy');
    });
  };
});
