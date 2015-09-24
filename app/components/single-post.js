import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedComments: Ember.computed.sort('post.comments', 'sortBy'),
  actions: {
    addComment(post, params) {
      this.sendAction('addComment', post, params);
    }
  }
});
