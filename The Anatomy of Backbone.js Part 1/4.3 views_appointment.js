var AppointmentView = Backbone.View.extend({
  template: _.template('<span><%= title %></span> <a href="#">x</a>'),
  events:  { "click a": "cancel" },
  cancel: function(){
    this.model.cancel();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});