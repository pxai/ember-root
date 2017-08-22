import Ember from 'ember';

export default Ember.Controller.extend({
        index: function() {
            alert('Inside the controller');
            //this.transitionToRoute('search-results',this.get('searchTerms'));
        }
});
