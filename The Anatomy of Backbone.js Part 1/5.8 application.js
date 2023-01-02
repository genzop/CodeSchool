var Appointment = Backbone.Model.extend({});
var AppointmentList = Backbone.Collection.extend({
model: Appointment
});
var appointments = new AppointmentList();
var titles = appointments.map(function(appointment){
	return appointment.get('title');
});