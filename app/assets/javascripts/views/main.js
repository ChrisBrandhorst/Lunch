Lunch.Views.Main = Backbone.View.extend({


  // 
  el:       'body',
  template: JST['main'],
  events:   {
    "click a[href^='/']": 'pushState'
  },


  //
  initialize: function() {
    this.render();
  },


  //
  render: function() {
    this.$el.html(this.template());
  },


  // Globally capture clicks and route them through Backbone's navigate method.
  pushState: function(ev) {
    var href = $(ev.currentTarget).attr('href').replace(/^\//,'').replace('\#\!\/','');
    Backbone.history.navigate(href, {trigger:true});
    return false;
  }


});