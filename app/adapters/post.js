import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://localhost:3000',   // put http! appears as dir before namespace
    port: 8080,                      // nope
    url: 'http://other.pello.io',    // nope
    namespace: 'api/v1'
});