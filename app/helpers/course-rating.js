import Ember from 'ember';

export function courseRating(params/*, hash*/) {
  var rate = parseFloat(params[0]);

  var html = '<div><b>Rating:</b> <i>';
  for (var i =0;i<rate;i++)
    html += '*';

  html += '</i></div>';

return new Ember.String.htmlSafe(html);
}

export default Ember.Helper.helper(courseRating);
