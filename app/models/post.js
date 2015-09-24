import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  author: DS.attr(),
  date: DS.attr('date'),
  content: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', { async: true }),
  categories: DS.hasMany('category', { async: true})
});
