Lunch.Routers.Entries = Backbone.Router.extend({

  routes: {
    'entries(/)':     'index',
    'entries/:date':  'index'
  },

  index: function(date) {
    // if (date)
      Lunch.Views.EntriesIndex.browse(date);
    // else
    //   this.navigate("entries/" + Lunch.Views.EntriesIndex.date.toDataString(), {replace:true});
  }

});