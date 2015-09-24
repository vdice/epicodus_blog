import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  updatePostForm: false,
  actions: {
    updateHide() {
      this.set('updatePostForm', false);
    },
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post, params) {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        image: this.get('image'),
        categories: this.get('selectedCategories'),
        post: this.get('post')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
