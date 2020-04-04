var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    App.fetch(function(data) {
      rooms = {};
      //for msgs
      for(elem of data.results) {
        let username = elem.username;
        if (username) {
          username = username.replace(/[^a-zA-Z\s]+/gi, '');
        }
        let message = {
          username: username,
          text: elem.text
        };

        if (!rooms[elem.roomname] && elem.roomname) {
          rooms[elem.roomname] = elem.roomname;
        }

        message = $(MessageView.render(message));

        $(message).appendTo('#chats');

        App.stopSpinner();
      }
      Friends.addFriend();

      for (room in rooms) {
        let $room = $('<option>' + room + '</option>');
        $room.appendTo('#roomsSelect');
      }
    });
  },

  renderMessage: function(room = undefined) {
    let username = App.username;
    let messageText = $('#message').val();

    let message = {
      username: username,
      roomname: room,
      text: messageText
    };

    App.send(message);
    message = $(MessageView.render(message));
    message.prependTo('#chats');

    $(".chat").remove();
    RoomsView.render(room);
    return false;
  }
};