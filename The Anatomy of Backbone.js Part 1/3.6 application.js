var AppointmentView = Backbone.View.extend({
  template: _.template('<span><%= title %></span>'),	
  events: { 'click': 'alertTitle' },
  alertTitle: function(){
    alert(this.model.get('title'));
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});