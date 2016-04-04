var LevelOne = require('./level-one');
var StartGame = require('./start-game');

function Game (stage, canvas) {
  this.stage = stage;
  this.canvas = canvas;
  this.startGame = new StartGame(canvas);
  this.levelOne = new LevelOne(canvas);
}

Game.prototype.runGame = function(context) {
  console.log(this.stage);
  if (this.stage === 0) {
    this.drawStartGame(context);
  } else if (this.stage === 1) {
    this.drawLevelOne(context);
  } else if (this.stage === 2) {
    this.drawEndGame(context);
  }
};

Game.prototype.drawStartGame = function(context) {
  context.fillText('To start the game press Enter.', 450, 300);
  if (this.startGame.listener.start) {
    this.stage = 1;
    this.startGame.listener.start = false;
  }
};

Game.prototype.drawEndGame = function(context) {
  context.fillText('Game over. To start a new game press Enter.', 400, 300);
  if (this.startGame.listener.start) {
    this.stage = 1;
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
    this.levelOne = new LevelOne(this.canvas);
  }
};

module.exports = Game;
