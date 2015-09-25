import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  posts: DS.hasMany('post', { async: true })
});
