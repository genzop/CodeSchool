var Appointment = Backbone.Model.extend({
  toJSON: function(){
    var attrs = _.clone(this.attributes);
    attrs.cankelled = attrs.cancelled;
    attrs = _.pick(attrs, 'title', 'cankelled', 'identifier');    
    return { appointment: attrs };
  }
});