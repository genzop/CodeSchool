var Appointment = Backbone.Model.extend({
  idAttribute: 'identifier',
  parse: function(response){
    var appointment = response.appointment;
    appointment.cancelled = appointment.cankelled;
    delete appointment.cankelled;
    return appointment;
  }
});