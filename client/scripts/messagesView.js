var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    App.fetch(function(data){
      for (elem of data.results){
        message = MessageView.format(elem.username, elem.text);
        $(message).appendTo('#chats');
      }
    })
  },

  renderMessage: function(room = undefined){
    let username = App.username;
    let messageText = $('#message').val();

    let message = {
      username: username,
      roomname: room,
      text: messageText
    }
    App.send(message);
    // message = MessageView.format(username, messageText)
    // $(message).prependTo('#chats');
  }

};