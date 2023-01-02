import Ember from 'ember';
import Option from '../models/option';
import Poll from '../models/poll';

const polls = [
  Poll.create({
    id: '1',
    question: 'Which Poisonous Plant Are You?',
    options: [
      Option.create({ id: '1', value: 'Nightshade' }),
      Option.create({ id: '2', value: 'Hemlock' }),
      Option.create({ id: '3', value: 'Rhubarb' })
    ]
  }),

  Poll.create({
    id: '2',
    question: 'Which Is Your Favorite Woodland Wanderer Way?',
    options: [
      Option.create({ id: '4', value: 'Honesty' }),
      Option.create({ id: '5', value: 'Integrity' }),
      Option.create({ id: '6', value: 'Patience' })
    ]
  })
];

export default Ember.Service.extend({
  getPolls(){
    return polls;
  },
  getPollById(id){
    return polls.findBy('id', id);
  }
});