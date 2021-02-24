/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\");\r\nconst Game = __webpack_require__(/*! ../ttt_solution/solution/game.js */ \"./ttt_solution/solution/game.js\");\r\n\r\n  $(() => {\r\n    const $gameEl = $('.ttt');\r\n    const game = new Game();\r\n    const view = new View(game, $gameEl);\r\n  });\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class View {\r\n  constructor(game, $el) {\r\n    this.game = game;\r\n    this.$el = $el;\r\n    this.setupBoard();\r\n    this.bindEvents();\r\n  }\r\n\r\n  bindEvents() {\r\n    this.$el.on('click', \"li\", (e) => {\r\n      let $li = $(e.currentTarget);\r\n      $li.text(this.game.currentPlayer);\r\n      this.makeMove($li);\r\n      this.game.playMove($li.data('pos'));\r\n      if (this.game.isOver()) {\r\n        const $winnerMsg = $('<h2>');\r\n        if (this.game.winner()) {\r\n          $winnerMsg.text(`You win, ${this.game.winner()}`);\r\n          this.$el.off('click');\r\n          $(`.${this.game.winner()}`).addClass('winner');\r\n          $(`.${this.game.winner()}`).removeClass(`${this.game.winner()}`)\r\n          $(`.${this.game.currentPlayer}`).addClass('loser');\r\n          $(`.${this.game.currentPlayer}`).removeClass(`${this.game.currentPlayer}`);\r\n          $('li').addClass('over')\r\n        } else {\r\n          $winnerMsg.text('Its a draw losers')\r\n        }\r\n        this.$el.append($winnerMsg);\r\n      }\r\n      // console.log(this.game.currentPlayer);\r\n    });\r\n  }\r\n\r\n  makeMove($square) {\r\n    $square.addClass(`${this.game.currentPlayer}`);\r\n  }\r\n\r\n  setupBoard() {\r\n    const $rows = $('<ul>');\r\n    for (let i = 0; i < 3; i++) {\r\n      for (let j = 0; j < 3; j++) {\r\n        let $col = $('<li>');\r\n        $col.data('pos', [i, j]);\r\n        $rows.append($col);\r\n      }\r\n    }\r\n\r\n    this.$el.append($rows);\r\n  }\r\n}\r\n\r\n\r\nmodule.exports = View;\r\n\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ }),

/***/ "./ttt_solution/solution/board.js":
/*!****************************************!*\
  !*** ./ttt_solution/solution/board.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_solution/solution/moveError.js\");\r\n\r\nclass Board {\r\n  constructor() {\r\n    this.grid = Board.makeGrid();\r\n  }\r\n\r\n  isEmptyPos(pos) {\r\n    if (!Board.isValidPos(pos)) {\r\n      throw new MoveError('Is not valid position!');\r\n    }\r\n\r\n    return (this.grid[pos[0]][pos[1]] === null);\r\n  }\r\n\r\n  isOver() {\r\n    if (this.winner() != null) {\r\n      return true;\r\n    }\r\n\r\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\r\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\r\n        if (this.isEmptyPos([rowIdx, colIdx])) {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  placeMark(pos, mark) {\r\n    if (!this.isEmptyPos(pos)) {\r\n      throw new MoveError('Is not an empty position!');\r\n    }\r\n\r\n    this.grid[pos[0]][pos[1]] = mark;\r\n  }\r\n\r\n  print() {\r\n    const strs = [];\r\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\r\n      const marks = [];\r\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\r\n        marks.push(\r\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\r\n        );\r\n      }\r\n      strs.push(`${marks.join('|')}\\n`);\r\n    }\r\n\r\n    console.log(strs.join('-----\\n'));\r\n  }\r\n\r\n  winner() {\r\n    const posSeqs = [\r\n      // horizontals\r\n      [[0, 0], [0, 1], [0, 2]],\r\n      [[1, 0], [1, 1], [1, 2]],\r\n      [[2, 0], [2, 1], [2, 2]],\r\n      // verticals\r\n      [[0, 0], [1, 0], [2, 0]],\r\n      [[0, 1], [1, 1], [2, 1]],\r\n      [[0, 2], [1, 2], [2, 2]],\r\n      // diagonals\r\n      [[0, 0], [1, 1], [2, 2]],\r\n      [[2, 0], [1, 1], [0, 2]]\r\n    ];\r\n\r\n    for (let i = 0; i < posSeqs.length; i++) {\r\n      const winner = this.winnerHelper(posSeqs[i]);\r\n      if (winner != null) {\r\n        return winner;\r\n      }\r\n    }\r\n\r\n    return null;\r\n  }\r\n\r\n  winnerHelper(posSeq) {\r\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\r\n      const targetMark = Board.marks[markIdx];\r\n      let winner = true;\r\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\r\n        const pos = posSeq[posIdx];\r\n        const mark = this.grid[pos[0]][pos[1]];\r\n\r\n        if (mark != targetMark) {\r\n          winner = false;\r\n        }\r\n      }\r\n\r\n      if (winner) {\r\n        return targetMark;\r\n      }\r\n    }\r\n\r\n    return null;\r\n  }\r\n\r\n  static isValidPos(pos) {\r\n    return (0 <= pos[0]) &&\r\n    (pos[0] < 3) &&\r\n    (0 <= pos[1]) &&\r\n    (pos[1] < 3);\r\n  }\r\n\r\n  static makeGrid() {\r\n    const grid = [];\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n      grid.push([]);\r\n      for (let j = 0; j < 3; j++) {\r\n        grid[i].push(null);\r\n      }\r\n    }\r\n\r\n    return grid;\r\n  }\r\n}\r\n\r\nBoard.marks = ['x', 'o'];\r\n\r\nmodule.exports = Board;\r\n\n\n//# sourceURL=webpack:///./ttt_solution/solution/board.js?");

/***/ }),

/***/ "./ttt_solution/solution/game.js":
/*!***************************************!*\
  !*** ./ttt_solution/solution/game.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./ttt_solution/solution/board.js\");\r\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_solution/solution/moveError.js\");\r\n\r\nclass Game {\r\n  constructor() {\r\n    this.board = new Board();\r\n    this.currentPlayer = Board.marks[0];\r\n  }\r\n\r\n  isOver() {\r\n    return this.board.isOver();\r\n  }\r\n\r\n  playMove(pos) {\r\n    this.board.placeMark(pos, this.currentPlayer);\r\n    this.swapTurn();\r\n  }\r\n\r\n  promptMove(reader, callback) {\r\n    const game = this;\r\n\r\n    this.board.print();\r\n    console.log(`Current Turn: ${this.currentPlayer}`);\r\n\r\n    reader.question('Enter rowIdx: ', rowIdxStr => {\r\n      const rowIdx = parseInt(rowIdxStr);\r\n      reader.question('Enter colIdx: ', colIdxStr => {\r\n        const colIdx = parseInt(colIdxStr);\r\n        callback([rowIdx, colIdx]);\r\n      });\r\n    });\r\n  }\r\n\r\n  run(reader, gameCompletionCallback) {\r\n    this.promptMove(reader, move => {\r\n      try {\r\n        this.playMove(move);\r\n      } catch (e) {\r\n        if (e instanceof MoveError) {\r\n          console.log(e.msg);\r\n        } else {\r\n          throw e;\r\n        }\r\n      }\r\n\r\n      if (this.isOver()) {\r\n        this.board.print();\r\n        if (this.winner()) {\r\n          console.log(`${this.winner()} has won!`);\r\n        } else {\r\n          console.log('NO ONE WINS!');\r\n        }\r\n        gameCompletionCallback();\r\n      } else {\r\n        // continue loop\r\n        this.run(reader, gameCompletionCallback);\r\n      }\r\n    });\r\n  }\r\n\r\n  swapTurn() {\r\n    if (this.currentPlayer === Board.marks[0]) {\r\n      this.currentPlayer = Board.marks[1];\r\n    } else {\r\n      this.currentPlayer = Board.marks[0];\r\n    }\r\n  }\r\n\r\n  winner() {\r\n    return this.board.winner();\r\n  }\r\n}\r\n\r\nmodule.exports = Game;\r\n\n\n//# sourceURL=webpack:///./ttt_solution/solution/game.js?");

/***/ }),

/***/ "./ttt_solution/solution/moveError.js":
/*!********************************************!*\
  !*** ./ttt_solution/solution/moveError.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst MoveError = function (msg) { this.msg = msg; };\r\n\r\n// MoveError really should be a child class of the built in Error object provided\r\n// by Javascript, but since we haven't covered inheritance yet, we'll just\r\n// let it be a vanilla Object for now!\r\n\r\nmodule.exports = MoveError;\r\n\n\n//# sourceURL=webpack:///./ttt_solution/solution/moveError.js?");

/***/ })

/******/ });