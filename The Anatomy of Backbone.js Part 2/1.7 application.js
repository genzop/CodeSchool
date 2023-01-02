var AppointmentView = Backbone.View.extend({
  template: _.template('<span>' +
                        '<%= title %></span>' +
                        '<a href="#">x</a>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});