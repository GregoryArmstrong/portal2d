var Player = require('./player');
var Projectile = require('./projectile');
var Listener = require('./listener');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var projectiles = [];
var firstPlayer = new Player({x: 10});
var listener = new Listener(canvas, firstPlayer, projectiles);
listener.setListeners();

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  firstPlayer.draw(context).move();
  projectiles.forEach(function(projectile){
    projectile.draw(context).move();
  });
  requestAnimationFrame(gameLoop);
}
