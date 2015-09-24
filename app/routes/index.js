import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      categories: this.store.findAll('category'),
    });
  },

  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save()
        .catch(e => {console.log(e.errors)});
      this.transitionTo('index');
    }
  }
});
