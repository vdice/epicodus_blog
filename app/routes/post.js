import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save();
      this.transitionTo('post', params.post);
    },

    addCategory(params) {
      var newCategory = this.store.create('category', params);
      newCategory.save();
      params.post.save();
      this.transitionTo('post', params.post);
    }
  }
});
