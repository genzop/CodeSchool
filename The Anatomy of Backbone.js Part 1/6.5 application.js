var AppointmentListView = Backbone.View.extend({
  initialize: function(){
	this.collection.on('add', this.addOne, this);		
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model: model});
    appointmentView.render();
    this.$el.append(appointmentView.el);
  }
});