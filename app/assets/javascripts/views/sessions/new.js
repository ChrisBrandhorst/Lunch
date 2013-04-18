Lunch.Views.SessionsNew = new (Backbone.View.extend({

  tagName:  'section',
  id:       'session',
  template: JST['sessions/new'],
  model:    Lunch.Models.Session,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this))
  },

  show: function() {
    this.$el.appendTo(document.body);
  }

}));