var Appointment = Backbone.Model.extend({});
var AppointmentList = Backbone.Collection.extend({
	model: Appointment
});

var AppointmentListView = Backbone.View.extend({
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(appointment){
    var appointmentView = new AppointmentView({model: appointment});
    this.$el.append(appointmentView.render().el);
  }
});
