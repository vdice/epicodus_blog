import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      categories: this.store.findAll('category'),
    });
  },

  actions: {
    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save();
    },

    addCategory(params) {
      var newCategory = this.store.create('category', params);
      newCategory.save();
      params.post.save();
      this.transitionTo('post', params.post);
    },

    destroyPost(post) {
      post.get('comments').then(function(comments) {
        comments.forEach(function(comment) {
          comment.destroyRecord();
        });
      });
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
      this.transitionTo('post', params.post);
    }
  }
});
