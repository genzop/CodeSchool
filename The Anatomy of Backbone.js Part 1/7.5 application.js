
var AppRouter = Backbone.Router.extend({
	routes: {
		"appointments/:param": "show"
	},
	show: function(id){
		console.log("heyo we're in show with id %d", id);
	}
});

var router = new AppRouter();
router.navigate('appointments/1', { trigger: true });