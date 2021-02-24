class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', "li", (e) => {
      let $li = $(e.currentTarget);
      this.game.playMove($li.data('pos'));
      $li.text(this.game.currentPlayer);
      this.makeMove($li);
      // console.log(this.game.currentPlayer);
    });
  }

  makeMove($square) {
    $square.addClass('filled');
  }

  setupBoard() {
    const $rows = $('<ul>');
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $col = $('<li>');
        $col.data('pos', [i, j]);
        $rows.append($col);
      }
    }

    this.$el.append($rows);
  }
}


module.exports = View;
