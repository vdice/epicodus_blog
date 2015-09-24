import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedComments: Ember.computed.sort('post.comments', 'sortBy'),
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },

    addComment(params) {
      this.sendAction('addComment', params);
    },

    destroyPost(post) {
      if(confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
