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
      $li.text(this.game.currentPlayer);
      this.makeMove($li);
      this.game.playMove($li.data('pos'));
      if (this.game.isOver()) {
        const $winnerMsg = $('<h2>');
        if (this.game.winner()) {
          $winnerMsg.text(`You win, ${this.game.winner()}`);
          this.$el.off('click');
          $(`.${this.game.winner()}`).addClass('winner');
          $(`.${this.game.winner()}`).removeClass(`${this.game.winner()}`)
          $(`.${this.game.currentPlayer}`).addClass('loser');
          $(`.${this.game.currentPlayer}`).removeClass(`${this.game.currentPlayer}`);
          $('li').addClass('over')
        } else {
          $winnerMsg.text('Its a draw losers')
        }
        this.$el.append($winnerMsg);
      }
      // console.log(this.game.currentPlayer);
    });
  }

  makeMove($square) {
    $square.addClass(`${this.game.currentPlayer}`);
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
