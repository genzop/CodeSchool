/*4.3 On Load I
After the DOM has loaded, alert the number of images we have available by using the length property.*/

$(document).ready(function(){
  	alert($('img').length);
});