var Appointments = Backbone.Collection.extend({
  cancelledCount: function(){
    return this.where({cancelled: true}).length;
  }
});