import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedComments: Ember.computed.sort('post.comments', 'sortBy'),
  actions: {
    addComment(params) {
      this.sendAction('addComment', params);
    }
  }
});
