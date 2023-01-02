var Appointment = Backbone.Model.extend({});
var AppointmentList = Backbone.Collection.extend({
	model: Appointment
});
var appointments = new AppointmentList();
var json = [
  {title: 'Back pain'},
  {title: 'Dry mouth'},
  {title: 'Headache'} 
];

appointments.reset(json);
