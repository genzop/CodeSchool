var Appointment = Backbone.Model.extend({});

var Appointments = Backbone.Collection.extend({
  model: Appointment
});

var AppointmentsView = Backbone.View.extend({
  render: function() {
    var _this = this;
    this.collection.forEach(function(model) {
      return _this.$el.append("<h2>" + (model.get('title')) + "</h2><em>" + (model.get('name')) + "</em>");
    });
    return this;
  }
});

var appointments = new Appointments([
  {
    title: "Toothache",
    name: "Eric"
  }, {
    title: "Regular Checkup",
    name: "Gregg"
  }
]);

var appointmentsView = new AppointmentsView({collection: appointments, el: $('#app')});
appointmentsView.render();