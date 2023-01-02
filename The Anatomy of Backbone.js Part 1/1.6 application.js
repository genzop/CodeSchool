var Appointment = Backbone.Model.extend({});
var appointment = new Appointment();
var AppointmentView = Backbone.View.extend({
  render: function(){
    var html = '<li>' + this.model.get('title') + '</li>';
    $(this.el).html(html);
  }
});