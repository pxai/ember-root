import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('news');
  this.route('post', {
    path: 'post/:postid'
  });
  this.route('course', {
    path: 'course/:courseid'
  });
  this.route('about');
});

export default Router;
