var Appointment = Backbone.Model.extend({});
var appointment = new Appointment();
appointment.on('change:cancelled', function(){
  alert("Hey Dr. Goodparts, your appointment has changed!");
});
