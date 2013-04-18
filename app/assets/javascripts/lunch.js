// Main application object
window.Lunch = {
  Models: {}, Collections: {}, Views: {}, Routers: {},


  // Init
  initialize: function() {

    // Check login on start
    Lunch.ensureSession();

  },


  // Check session at the server.
  // If it exists, continue to start the app;
  // Else, show the login screen
  ensureSession: function() {
    Lunch.Models.Session.fetch({
      success: function() {
        Lunch.start();
      },
      error: function() {
        Lunch.Views.SessionsNew.show();
      }
    });
  },


  // Start the app
  start: function() {

    // Show the main page
    Lunch.Views.Main.show();
    
    // Init routers
    new Lunch.Routers.Entries;

    // Init history tracking
    Backbone.history.start({pushState: true});

    // Redirect to first tab if no fragment is present
    if (Backbone.history.fragment == "")
      // TODO: this ain't pretty!
      Lunch.Views.Main.$el.find('#navigation > a').first().click();
  }

};




// Init app on page load
$(document).ready(function(){
  Lunch.initialize();
});