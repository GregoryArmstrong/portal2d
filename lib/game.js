var LevelOne = require('./level-one');

function Game (stage, canvas) {
  this.stage = 0 || stage;
  this.canvas = canvas;
  this.levelOne = new LevelOne(canvas);
}

Game.prototype.runGame = function(context) {
  if (this.stage === 0) {
    // start game layout
  } else if (this.stage === 1) {
    this.drawLevelOne(context);
  }
};

Game.prototype.drawLevelOne = function(context) {
  this.levelOne.blocks.forEach(function(block){
    block.draw(context);
  });
  this.levelOne.firstPlayer.draw(context).move();
  if (this.levelOne.projectiles.blue) {
    this.levelOne.projectiles.blue.draw(context).move();
  }
  if (this.levelOne.projectiles.orange) {
    this.levelOne.projectiles.orange.draw(context).move();
  }
  this.levelOne.detector.playerCollisions(this.levelOne.firstPlayer, this.levelOne.blocks);
  this.levelOne.detector.projectileCollisions(this.levelOne.projectiles, this.levelOne.blocks);
  this.levelOne.userInfoDraw.drawProjectileType(this.levelOne.firstPlayer, context, this.stage);
  if (this.levelOne.firstPlayer.dead){
    alert('Dead!');
    this.levelOne = new LevelOne(this.canvas);
  }
  if (this.levelOne.detector.levelComplete) {
    this.stage = 2;
  }
};

module.exports = Game;
