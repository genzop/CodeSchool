var Appointment = Backbone.Model.extend({});
var AppointmentList = Backbone.Collection.extend({
	model: Appointment
});
var appointments = new AppointmentList();
appointments.fetch({silent: true});