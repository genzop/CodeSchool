var drGoodparts = new Doctor({name: "Dr. Goodparts"});

var AppointmentsView = Backbone.View.extend({
  initialize: function(options){
    this.doctor = options.doctor;
  }
});

var appView = new AppointmentsView({doctor: drGoodparts});

