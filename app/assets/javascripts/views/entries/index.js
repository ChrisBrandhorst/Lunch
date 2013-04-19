Lunch.Views.EntriesIndex = new (Backbone.View.extend({

  id:               'entries',
  tagName:          'section',
  icon:             'calendar',
  template:         JST['entries/index'],
  headerTemplate:   JST['entries/_index_header'],
  listTemplate:     JST['entries/_index_list'],
  listItemTemplate: JST['entries/_index_list_item'],
  model:            Lunch.Collections.Entries,

  events: {
    'tap li': 'toggleEntry'
  },

  // 
  initialize: function() {
    this.date = this.model.getWeekDate();
    this.listenTo(this.model, 'add remove reset destroy', this.updateList);
    this.listenTo(this.model, 'change', this.updateItem);
  },

  //
  browse: function(date) {
    this.date = this.model.getWeekDate(date);
    this.$header.html( this.headerTemplate(this) );
    this.model.fetch({date:this.date});
  },

  //
  render: function() {
    this.$el.html( this.template(this) );
    this.$header = this.$('> header > h1');
    this.$list = this.$('#entries_list');
    return this;
  },

  //
  updateList: _.debounce(function() {
    this.$list.html( this.listTemplate(this) );
  }, 10),

  //
  updateItem: function(entry) {
    this.$list.find('[data-cid=' + entry.cid + ']').replaceWith(
      this.listItemTemplate({entry:entry})
    );
  },

  //
  toggleEntry: function(ev) {
    var $row  = $(ev.currentTarget),
        cid   = $row.attr('data-cid'),
        entry = this.model.get(cid);

    entry.toggleJoin().save();
  }

}));