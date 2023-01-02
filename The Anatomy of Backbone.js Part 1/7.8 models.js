
var Appointment = Backbone.Model.extend({
	defaults: function() {
		return {
			'date': new Date(),
			'cancelled': false,
			'title': 'Checkup'
		}
	}
});

var AppointmentList = Backbone.Collection.extend({
	model: Appointment
});