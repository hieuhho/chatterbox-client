var RoomsView = {

  $button: $('#roomsButton'),
  $select: $('#roomsSelect'),

  initialize: function() {
    //RoomsView.render()
  },

  render: function() {
    $(".chat").remove();

    console.log(RoomsView.$select.val())

    if (RoomsView.$select.val() === 'lobby'){
      MessagesView.render()
      return;
    }

    App.fetch(function(data){
      for (elem of data.results){
        if (elem.roomname === RoomsView.$select.val()) {
          message = MessageView.format(elem.username, elem.text);
          $(message).appendTo('#chats');
        }
      }
    })
  },

  addRoom: function() {
    let roomName = prompt('please enter a room name');

    if (roomName) {
      let $roomName = $('<option class="roomName">' + roomName + '</option>')
      $roomName.appendTo(RoomsView.$select);
    }
  }
};
