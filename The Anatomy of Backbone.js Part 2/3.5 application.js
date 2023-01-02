var AppRouter = new (Backbone.Router.extend({  
  initialize: function(){
    this.route(/^todos\/(\d+)$/, 'show');
  },
  show: function(id){    
    console.log(id);
  }
}));