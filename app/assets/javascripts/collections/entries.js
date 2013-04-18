Lunch.Collections.Entries = new (Backbone.Collection.extend({

  model:  Lunch.Models.Entry,
  url:    '/entries',
  comparator:   'date',

  getWeekDate: function(date) {
    if (date instanceof Date)
      date = date.clone();
    else if (_.isString(date))
      date = Date.parse(date);
    else
      date = Date.today();
    return date.moveToFirstDayOfWeek();
  },

  fetch: function(options) {
    options || (options = {});
    options.data || (options.data = {});
    _.extend(options.data, { date: this.getWeekDate(options.date).toDataString() } );
    return Backbone.Collection.prototype.fetch.call(this, options);
  },

  modelsForWeek: function(date) {
    date = this.getWeekDate(date);
    var minDate = date,
        maxDate = date.clone().addWeeks(1);
    return this.filter(function(entry){
      return entry.get('date') >= minDate && entry.get('date') < maxDate;
    });
  }

}));