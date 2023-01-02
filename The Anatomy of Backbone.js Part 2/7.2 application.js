var AppointmentForm = Backbone.View.extend({
  template: Mustache.compile('<form>' + 
  	'<input name="title" type="text" value="{{title}}" />' + 
  	'<input name="name" type="text" value="{{name}}" /></form>'),
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});