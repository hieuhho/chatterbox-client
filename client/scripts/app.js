var App = {


  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    username = window.location.search.substr(10);

    FormView.initialize();
    // RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback(data);
    });
  },

  send: function(message) {
    Parse.create(message);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('slow');
    FormView.setStatus(false);
  }
};
