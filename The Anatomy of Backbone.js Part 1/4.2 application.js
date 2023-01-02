var AppointmentView = Backbone.View.extend({
  template: _.template('<a><span><%= title %></span></a>'),
  events:{ 'click a': 'cancelAppointment' },    
  cancelAppointment: function(){
    this.model.set({'cancelled': true});
  },    
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});