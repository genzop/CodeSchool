var AppointmentForm = Backbone.View.extend({
  template: _.template('<form><input name="title" type="text" value="<%= title %>" /><input name="name" type="text" value="<%= name %>" /></form>'),
  events: {
    submit: 'save'
  },
  save: function(e){
  	e.preventDefault();
    var newTitle = this.$('input[name=title]').val();
    var newName = this.$('input[name=name]').val();
    this.model.save({title: newTitle, name: newName});
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});