import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){

  var url = 'http://itp-api.herokuapp.com/songs';

  var promise= $.getJSON(url);
  return promise;
}
});
