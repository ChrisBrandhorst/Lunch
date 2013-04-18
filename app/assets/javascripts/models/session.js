// Singleton
Lunch.Models.Session = new (Backbone.Model.extend({


  url: '/session',


  // Log off the current user
  // We need a little hack here: Backbone won't send a DELETE if no ID is set,
  // so we set it temporarily.
  destroy: function() {
    this.id = 1;
    Backbone.Model.prototype.destroy.apply(this, arguments);
    delete this.id;
  }


}));