var AppRouter = new (Backbone.Router.extend({
  routes: {
    'appointments/:id':  'show',
    '*path': 'notFound'
  },
  show: function(id){
    var appointment = new Appointment({id: id});
    console.log(appointment);
  },
  notFound: function(){
    console.log('Route not found!');
  }
}));