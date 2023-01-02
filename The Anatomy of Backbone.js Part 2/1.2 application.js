var Appointment = Backbone.Model.extend({
  parse: function(response){
	return response.appointment;
  }
});