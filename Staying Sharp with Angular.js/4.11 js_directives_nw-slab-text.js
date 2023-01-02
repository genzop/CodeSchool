angular.module('NoteWrangler')
.directive('nwSlabText', function($timeout) {
  return function(scope, element){
    $timeout(function(){
      element.slabText();  
    });    
  };
});