var Player = require('./player');
// var Projectile = require('./projectile');
var Listener = require('./listener');
// var Block = require('./block');
var Level = require('./level');
var Detector = require('./detector');
// var _ = require('lodash');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var blocks = [];
var projectiles = {blue: null, orange: null};
var firstPlayer = new Player({x: 200, y:500});
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
  if (projectiles.blue) {
    projectiles.blue.draw(context).move();
  }
  if (projectiles.orange) {
    projectiles.orange.draw(context).move();
  }
  detector.playerCollisions(firstPlayer);
  requestAnimationFrame(gameLoop);
}
