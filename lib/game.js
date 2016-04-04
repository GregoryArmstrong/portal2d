var LevelOne = require('./level-one');
var LevelTwo = require('./level-two');
var LevelThree = require('./level-three');
var StartGame = require('./start-game');

function Game (stage, canvas) {
  this.stage = stage;
  this.canvas = canvas;
  this.startGame = new StartGame(canvas);
  this.levelOne = new LevelOne(canvas);
  // this.levelTwo = new LevelTwo(canvas);
}

Game.prototype.runGame = function(context) {
  if (this.stage === 0) {
    this.drawStartGame(context);
  } else if (this.stage === 1) {
    this.drawLevelOne(context);
  } else if (this.stage === 2) {
    this.drawLevelTwo(context);
  } else if (this.stage === 3) {
    this.drawLevelThree(context);
  } else if (this.stage === 4) {
    this.drawEndGame(context);
  }
};

Game.prototype.drawStartGame = function(context) {
  context.fillText('To start the game press Enter.', 450, 300);
  this.beginLevelOne();
};

Game.prototype.drawEndGame = function(context) {
  context.fillText('Game over. To start a new game press Enter.', 300, 300);
  this.beginLevelOne();
};

Game.prototype.beginLevelOne = function() {
  if (this.startGame.listener.start) {
    this.stage = 1;
    this.startGame.listener.start = false;
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
    // this.levelOne = new LevelOne(this.canvas);
    this.levelTwo = new LevelTwo(this.canvas);
  }
};

Game.prototype.drawLevelTwo = function(context) {
  this.levelTwo.blocks.forEach(function(block){
    block.draw(context);
  });
  this.levelTwo.firstPlayer.draw(context).move();
  if (this.levelTwo.projectiles.blue) {
    this.levelTwo.projectiles.blue.draw(context).move();
  }
  if (this.levelTwo.projectiles.orange) {
    this.levelTwo.projectiles.orange.draw(context).move();
  }
  this.levelTwo.detector.playerCollisions(this.levelTwo.firstPlayer, this.levelTwo.blocks);
  this.levelTwo.detector.projectileCollisions(this.levelTwo.projectiles, this.levelTwo.blocks);
  this.levelTwo.userInfoDraw.drawProjectileType(this.levelTwo.firstPlayer, context, this.stage);
  if (this.levelTwo.firstPlayer.dead){
    alert('Dead!');
    this.levelTwo = new LevelTwo(this.canvas);
  }
  if (this.levelTwo.detector.levelComplete) {
    this.stage = 3;
    // this.levelTwo = new LevelTwo(this.canvas);
    this.levelThree = new LevelThree(this.canvas);
  }
};

Game.prototype.drawLevelThree = function(context) {
  this.levelThree.blocks.forEach(function(block){
    block.draw(context);
  });
  this.levelThree.firstPlayer.draw(context).move();
  if (this.levelThree.projectiles.blue) {
    this.levelThree.projectiles.blue.draw(context).move();
  }
  if (this.levelThree.projectiles.orange) {
    this.levelThree.projectiles.orange.draw(context).move();
  }
  this.levelThree.detector.playerCollisions(this.levelThree.firstPlayer, this.levelThree.blocks);
  this.levelThree.detector.projectileCollisions(this.levelThree.projectiles, this.levelThree.blocks);
  this.levelThree.userInfoDraw.drawProjectileType(this.levelThree.firstPlayer, context, this.stage);
  if (this.levelThree.firstPlayer.dead){
    alert('Dead!');
    this.levelThree = new LevelThree(this.canvas);
  }
  if (this.levelThree.detector.levelComplete) {
    this.stage = 4;
    this.levelThree = new LevelThree(this.canvas);
  }
};

module.exports = Game;
