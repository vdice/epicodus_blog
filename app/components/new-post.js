import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  selectedCategories: [],

  actions: {
    postShow() {
      this.set('addNewPost', true);
    },
    postHide() {
      this.set('addNewPost', false);
    },

    save() {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        image: this.get('image'),
        categories: this.get('selectedCategories')
      };

      this.set('addNewPost', false),
      this.sendAction('save', params);
    }
  }
});
