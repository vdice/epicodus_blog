import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    addComment(post, params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save()
        .catch(e => {console.log(e.errors)});

      params.post.save();
      this.transitionTo('post', params.post);
    },
  }
});
