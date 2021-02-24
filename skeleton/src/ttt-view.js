class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {}
}

View.prototype.setupBoard = function() {
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

module.exports = View;
