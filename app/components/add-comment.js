import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment(post) {
      var params = {
        comment: this.get('comment'),
        user: this.get('user') ? this.get('user') : 'Anonymous',
        post: this.get('post'),
        date: new Date()
      };

      this.sendAction('addComment', params);
    }
  }
});
