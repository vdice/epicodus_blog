import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
