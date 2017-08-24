import Ember from 'ember';
var data = { 'courses' : [
        {
            'id': 1,
            'name' : 'Ruby basics',
            'description': 'Ruby programming basics',
            'available' : true,
            'level': '3',
            'rating': 4,
            'teacher' : {'url':'http://eugenekrabs','name':'Eugene'}
        },
        {
            'id': 2,
            'name' : 'Rails crash course',
            'description': 'Ruby on Rails framework',
            'available' : true,
            'level': '4',
            'rating': 3,
            'teacher' : {'url':'http://pello.io','name':'Pello'}
        },
        {
            'id': 3,
            'name' : 'Ember.js',
            'description': 'Ambitious Web apps with Ember.js',
            'available' : true,
            'level': '2',
            'rating': 5,
            'teacher' : {'url':'http://igor.land','name':'Igor'}
        },
        {
            'id': 4,
            'name' : 'Redux',
            'description': 'Redux: the definitive course',
            'available' : false,
            'level': '5',
            'rating': 2,
            'teacher' : {'url':'http://igor.land','name':'Igor'}
        }
    ]};
export default Ember.Route.extend({
model() {
    alert(this.get('courseid'));
    return {
            'id': 4,
            'name' : 'Redux',
            'description': 'Redux: the definitive course',
            'available' : false,
            'level': '5',
            'rating': 2,
            'teacher' : {'url':'http://igor.land','name':'Igor'}
        }
}   ,
    actions: {
    courseDetail(course) {
      alert(course);
      console.log('Course detail: ' , course)
    }
  }
});
