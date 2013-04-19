Lunch.Models.Entry = Backbone.Model.extend({

  parse: function(response) {
    response.date = Date.parse(response.date);
    return response;
  },

  toJSON: function() {
    var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
    json.date = json.date.toDataString();
    return json;
  },

  toggleJoin: function() {
    this.set('join', !this.get('join'));
    return this;
  }

});
