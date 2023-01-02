var Appointment = Backbone.Model.extend({});
var AppointmentList = Backbone.Collection.extend({
	model: Appointment
});

var appointments = new AppointmentList();
var AppointmentListView = Backbone.View.extend({});
var appoitmentListView = new AppointmentListView({collection: appointments});