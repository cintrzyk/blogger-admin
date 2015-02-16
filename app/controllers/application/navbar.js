import Ember from 'ember';
/* global $ */

export default Ember.Controller.extend({
  actions: {
    toggleSidebar: function() {
      $('body').toggleClass('sidebar-collapse sidebar-open');
    }
  }
});
