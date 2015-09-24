import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      categories: this.store.findAll('category'),
    });
  },

  // categoryTypes: function() {
  //   var categoryTypes = [];
  //   console.log('got here')
  //   console.log(categoriesType)
  //   this.categories.forEach(function(category) {
  //     categoryTypes.push(category.type)
  //   });
  //   return categoryTypes;
  // },

  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save()
        .catch(e => {console.log(e.errors)});
      this.transitionTo('index');
    },

    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    }
  }
});
