Lunch.Views.Main = new (Backbone.View.extend({


  // 
  tagName:    'section',
  id:         'main',
  className:  'loading',
  template:   JST['main/index'],
  events:     {
    "click a[href^='/']": 'pushState'
  },


  // 
  sections: [
    Lunch.Views.EntriesIndex
  ],


  // Constructor
  initialize: function() {

    // Listen to all routers to toggle active section
    this.listenTo(Backbone.history, 'route', this.activateSection);
  },


  // 
  show: function() {
    if (!this.el.parentNode) {
      this.render();
      this.$el.appendTo(document.body);
    }
  },


  //
  render: function() {
    this.$el.html(this.template(this));

    var $body = this.$el;
    _.each(this.sections, function(section){
      section.render().$el.hide().appendTo($body);
    });

    return this;
  },


  // Globally capture clicks and route them through Backbone's navigate method.
  pushState: function(ev) {
    var href = $(ev.currentTarget).attr('href').replace(/^\//,'').replace('\#\!\/','');
    Backbone.history.navigate(href, {trigger:true});
    return false;
  },


  // 
  activateSection: function(router, route, params) {
    var id        = Backbone.history.fragment.replace(/^\//, "").split("/")[0],
        $section  = this.$el.children('section#' + id);
    if ($section.length) {
      $section.show().siblings('section').hide();
      this.$el.find('#navigation > a[data-section=' + id + ']').addClass('selected').siblings().removeClass('selected');
    }
  }


}));