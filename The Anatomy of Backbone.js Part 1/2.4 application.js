var Appointment = Backbone.Model.extend({urlRoot: '/appointments'});
var appointment = new Appointment({id: 1});
appointment.fetch();