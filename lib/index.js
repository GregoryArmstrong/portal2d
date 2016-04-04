var Game = require('./game');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var game = new Game(1, canvas);

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  game.runGame(context);
  requestAnimationFrame(gameLoop);
}
