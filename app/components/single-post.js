import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment(post, params) {
      this.sendAction('addComment', post, params);
    }
  }
});
