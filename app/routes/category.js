import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      // posts: this.store.findAll('post'),
      category: this.store.findRecord('category', params.category_id),
    });
  },
});
