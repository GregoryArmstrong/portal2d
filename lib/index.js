var Player = require('./player');
// var Projectile = require('./projectile');
var Listener = require('./listener');
// var Block = require('./block');
var Level = require('./level');
var Detector = require('./detector');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var blocks = [];
var projectiles = [];
var firstPlayer = new Player({x: 500, y:300});
var listener = new Listener(canvas, firstPlayer, projectiles);
var level = new Level(blocks);
var detector = new Detector(firstPlayer, blocks, projectiles);

listener.setListeners();
level.buildLevel();

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(function(block){
    block.draw(context);
  });
  firstPlayer.draw(context).move();
  projectiles.forEach(function(projectile){
    projectile.draw(context).move();
  });
  detector.playerCollisions(firstPlayer);
  // collision detection
  requestAnimationFrame(gameLoop);
}
