var Appointment = Backbone.Model.extend({
  defaults: function(){
    return { title: 'Checkup', date: new Date() };
  }  
});
