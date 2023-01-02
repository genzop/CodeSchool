App.Views.Appointment = Backbone.View.extend({
  template: Mustache.compile('<h2>{{ title }}</h2>' + 
    						 'Possible Dates: <ul>{{#possibleDates}}' +
    							'<li>{{day}} at {{time}}</li>' +
    						 '{{/possibleDates}}</ul>'),
  
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});