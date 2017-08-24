import Ember from 'ember';

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
     // console.log('Course detail: ' , course)
    }
  }
});
