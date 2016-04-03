var Game = require('./game');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var game = buildGame(1, canvas);

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  game.blocks.forEach(function(block){
    block.draw(context);
  });
  game.firstPlayer.draw(context).move();
  if (game.projectiles.blue) {
    game.projectiles.blue.draw(context).move();
  }
  if (game.projectiles.orange) {
    game.projectiles.orange.draw(context).move();
  }
  game.detector.playerCollisions(game.firstPlayer, game.blocks);
  game.detector.projectileCollisions(game.projectiles, game.blocks);
  game.userInfoDraw.drawProjectileType(game.firstPlayer, context, game.level.stage);
  if (game.detector.levelComplete) {
    if (game.level.stage === 1) {
      game = buildGame(2, canvas);
    }
  }
  // depending on win or not win, call a new method?
  requestAnimationFrame(gameLoop);
}

function buildGame (stage, canvas) {
  return new Game(stage, canvas);
}
