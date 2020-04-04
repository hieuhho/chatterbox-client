var Friends = {

  addFriend: function() {
    $('.username').on('click', function() {
      let id = this.id;
      $('.' + id).toggleClass('friend');
    });
  }
};