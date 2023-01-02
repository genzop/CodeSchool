var Appointment = Backbone.Model.extend({
  parse: function(response){
    response = response.appointment;
    response.cancelled = response.cankelled;
    delete response.cankelled;
    return response;
  }
});