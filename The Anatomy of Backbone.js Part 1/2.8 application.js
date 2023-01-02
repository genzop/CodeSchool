var Appointment = Backbone.Model.extend({});
var appointment = new Appointment({id: 1});
console.log(appointment.toJSON());