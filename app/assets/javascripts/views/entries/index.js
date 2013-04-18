Lunch.Views.EntriesIndex = new (Backbone.View.extend({

  id:             'entries',
  tagName:        'section',
  template:       JST['entries/index'],
  headerTemplate: JST['entries/_index_header'],
  listTemplate:   JST['entries/_index_list'],
  model:          Lunch.Collections.Entries,

  events: {
    // 'click '
  },

  // 
  initialize: function() {
    this.date = this.model.getWeekDate();
    this.listenTo(this.model, 'add remove reset change destroy', this.update);
  },

  browse: function(date) {
    this.date = this.model.getWeekDate(date);
    this.$header.html( this.headerTemplate(this) );
    this.model.fetch({date:this.date});
  },

  render: function() {
    this.$el.html( this.template(this) );
    this.$header = this.$('> header > h1');
    this.$list = this.$('#entries_list');
    return this;
  },

  update: _.debounce(function() {
    this.$list.html( this.listTemplate(this) );
  }, 10)


}));