import Ember from 'ember';

export default Ember.Component.extend({
  sortedPostsProps: ['date:desc'],
  sortedPosts: Ember.computed.sort('posts', 'sortedPostsProps'),
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },

    destroyPost(post) {
      this.sendAction('destroyPost', post);
    }
  }
});
