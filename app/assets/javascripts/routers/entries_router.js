Lunch.Routers.Entries = Backbone.Router.extend({

  routes: {
    'entries(/)':     'index',
    'entries/:date':  'index'
  },

  index: function(date) {
    Lunch.Views.EntriesIndex.browse(date);
  }

});