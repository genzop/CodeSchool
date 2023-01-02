var Appointments = Backbone.Collection.extend({
  comparator: function(appointment1, appointment2){
    return appointment1.get('date') < appointment2.get('date');
  }
});