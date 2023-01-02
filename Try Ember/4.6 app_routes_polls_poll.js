import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    voteForOption(poll, option){
      option.incrementProperty('votes', 1);
      this.transitionTo('polls.results', poll);
    }
  },    
  model(params) {
    return this.get('store').getPollById(params.poll_id);
  },

  store: Ember.inject.service()
});