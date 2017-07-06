const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor(el){
    this.$el = $(el);
    this.$input = this.$el.find('input[name=username]');
    this.$ul = this.$el.find(".users");
  }

  handleInput() {
    this.$input.on("input", event => {
      event.preventDefault();
      APIUtil.searchUsers(this.$input.val())
        .then(users => this.renderResults(users));
    });
  }

}
