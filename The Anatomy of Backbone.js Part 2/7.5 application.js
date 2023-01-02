App.Models.Appointment = Backbone.Model.extend({
  sync: function(method, model, options){
    if(method === "read" || method === "create"){
      Backbone.sync(method, model, options);    
    }    
  }
});