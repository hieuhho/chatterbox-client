var RoomsView = {

  $button: $('#roomsButton'),
  $select: $('#roomsSelect'),

  initialize: function() {
    //RoomsView.render()
  },

  render: function() {
    $(".chat").remove();

    if (RoomsView.$select.val() === 'All') {
      MessagesView.render();
      return;
    }

    App.fetch(function(data) {
      for (elem of data.results){
        if (elem.roomname === RoomsView.$select.val()) {
          let username = elem.username;
          if (username) {
            username = username.replace(/[^a-zA-Z\s]+/gi, '');
          }
          let message = {
            username: username,
            text: elem.text
          };
          message = $(MessageView.render(message));
          $(message).appendTo('#chats');
        }
      }
      Friends.addFriend();
    });
  },

  addRoom: function() {
    let roomName = prompt('please enter a room name');

    if (roomName) {
      let $roomName = $('<option class="roomName">' + roomName + '</option>');
      $roomName.appendTo(RoomsView.$select);
    }
  }
};
