var Appointment = Backbone.Model.extend({
  cancel: function(){
    this.set({cancelled: true});
  }
});
