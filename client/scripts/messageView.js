var MessageView = {

  // render: _.template(`

  //     <div class="chat">
  //       <div class="username"></div>
  //       <div></div>
  //     </div>
  //     -->
  //   `),

  format: function(username, text) {
    let $message = $('<div class="chat"></div>');
    let $username = $('<a src="#" class="username ' + username + '">' +  escape(username) + '</a>');
    let $text = $('<div>' + escape(text) + '</div>');

    $username.on('click', function(){
      $('.' + username).css('color', 'navy')
    })

    $($username).appendTo($message)
    $($text).appendTo($message)

    return $message;
  }

};