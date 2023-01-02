import Ember from 'ember';

export default Ember.Component.extend({
  percentage: Ember.computed('optionVotes', 'pollVotes', function() {
    return this.get('optionVotes') * 100 / this.get('pollVotes');
  })
});
