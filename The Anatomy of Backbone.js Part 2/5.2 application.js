var AppointmentForm = Backbone.View.extend({
  template: _.template('<form><input name="name" value="" />' + 
                       '<input name="title" value="" />' + 
                       '<button>Save</button></form>')                       
});