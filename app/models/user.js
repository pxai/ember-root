
import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  username: DS.attr(),
  email: DS.attr(),
  avatar: DS.attr()
});
