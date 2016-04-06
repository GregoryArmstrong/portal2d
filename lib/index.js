var Game = require('./game');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var game = new Game(0, canvas);
var audio = new Audio('./audio/portal-still-alive.mp3');
audio.play();

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  game.runGame(context);
  requestAnimationFrame(gameLoop);
}
