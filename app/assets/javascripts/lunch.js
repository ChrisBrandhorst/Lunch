// Main application object
window.Lunch = {
  Models: {}, Collections: {}, Views: {}, Routers: {},


  // Init
  initialize: function() {

    Lunch.checkLogin();

  },


  //
  checkLogin: function() {

    Lunch.Models.Session.fetch({
      success: function() {
        Lunch.afterLogin();
      },
      error: function() {
        // TODO: show login screen
      }
    });

  },


  // 
  afterLogin: function() {
    
    // Init history tracking
    Backbone.history.start({pushState: true});

    // TODO: init page
  }


};




// Init app on page load
$(document).ready(function(){
  Lunch.initialize();
});