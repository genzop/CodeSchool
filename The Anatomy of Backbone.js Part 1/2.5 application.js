var Appointment = Backbone.Model.extend({});
var appointment = new Appointment({id: 1});
appointment.set({cancelled: true});
appointment.save()