var AppointmentList = Backbone.Collection.extend({
  model: Appointment,
  initialize: function(){
    this.on('remove', this.hideAppointment);
  },
  hideAppointment: function(appointment){
    appointment.trigger('hide');
  }
});
