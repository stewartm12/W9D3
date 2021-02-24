const View = require('./ttt-view.js');
const Game = require('../ttt_solution/solution/game.js');

  $(() => {
    const $gameEl = $('.ttt');
    const game = new Game();
    const view = new View(game, $gameEl);
    view.setupBoard();
  });
