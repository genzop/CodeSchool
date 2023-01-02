App.Models.Appointment = Backbone.Model.extend({
  sync: function(method, model, options){
    options = options || {};

    switch(method){
      case "delete":
        var key = "Appointment-" + model.id;
        localStorage.removeItem(key);
        break;
      case "update":
        var key = "Appointment-" + model.id;
        localStorage.setItem(key, JSON.stringify(model));
        break;
      case "create":
        var key = "Appointment-" + model.id;
        localStorage.setItem(key, JSON.stringify(model));
        break;
      case "read":
        var key = "Appointment-" + model.id;
        var result = localStorage.getItem(key);
        if(result){
          result = JSON.parse(result);
          options.success && options.success(result);
        }else if(options.error){
          options.error("Couldn't find Appointment with id=" + model.id);
        }
        break;
    }
  }
});