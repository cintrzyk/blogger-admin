import Ember from 'ember';
/* global _ */

export default Ember.Controller.extend({
  contentHeader: function() {
    var header = this.currentPath.split('.')[0];
    return header !== 'index' ? _.capitalize(header) : 'Dashboard';
  }.property('currentPath')
});
