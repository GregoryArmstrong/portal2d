var Listener = require('./listener');

function StartGame (canvas) {
  this.listener = new Listener(canvas);
  this.listener.startGame();
}

module.exports = StartGame;
