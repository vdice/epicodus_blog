import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save()
        .catch(e => {console.log(e.errors)});
      this.transitionTo('index');
    },

    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    }
  }
});
