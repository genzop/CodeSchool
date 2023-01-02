var AppRouter = Backbone.Router.extend({
  routes: { "appointments/:id": "show" },
  show: function(id){
    var appointment = new Appointment({id: id});
    appointment.fetch();
    var appointmentView = new AppointmentView({ model: appointment });
    appointmentView.render(); 
    $('#app').html(appointmentView.el);       
  },  
});
