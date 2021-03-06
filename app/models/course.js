
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  available: DS.attr('string'),
  level: DS.attr('number'),
  rating: DS.attr('number'),
   createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  teacher: { url: DS.attr('string'), name: DS.attr('string') }
});
/*
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
});*/