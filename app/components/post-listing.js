import Ember from 'ember';

export default Ember.Component.extend({
  sortedPostsProps: ['date:desc'],
  sortedPosts: Ember.computed.sort('posts', 'sortedPostsProps'),
});
