import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,

  actions: {
    postShow() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        image: this.get('image')
      };

      this.set('addNewPost', false),
      this.sendAction('save', params);
    }
  }
});
