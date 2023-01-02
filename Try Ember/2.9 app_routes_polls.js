import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [{ id: '1', question: 'Which Poisonous Plant Are You?' },
            { id: '2', question: 'Which Is Your Favorite Woodland Wanderer Way?' }];
  }
});
