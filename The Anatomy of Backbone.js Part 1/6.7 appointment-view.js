var AppointmentView = Backbone.View.extend({
  initialize: function(){
	this.model.on('hide', this.remove, this);
  },
  remove: function(){
    this.$el.remove();
  }
});