var AppointmentView = Backbone.View.extend({
  template: _.template('<span class="<% if(cancelled) print("cancelled") %>">' +
                        '<%= title %></span>' +
                        '<a href="#">x</a>'),

  events:  { "click a": "cancel" },
  initialize: function(){
  	this.model.on('change', this.render, this);
  },
  cancel: function(){
    this.model.cancel();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});