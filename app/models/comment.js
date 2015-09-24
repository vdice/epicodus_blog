import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  user: DS.attr(),
  post: DS.belongsTo('post'),
  date: DS.attr()
});
