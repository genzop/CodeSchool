var Appointment = Backbone.Model.extend({});
var appointment = new Appointment({id: 1});
appointment.on('change', function(){
  alert('One attribute was changed!')
});