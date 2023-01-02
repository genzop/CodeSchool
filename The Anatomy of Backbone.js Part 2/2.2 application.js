var Appointments = Backbone.Collection.extend({
  parse: function(response){
    this.perPage = response.per_page;
    this.page = response.page;
    this.total = response.total;
    return response;
  }
});