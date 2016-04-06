var LevelOne = require('./level-one');
var LevelTwo = require('./level-two');
var LevelThree = require('./level-three');
var LevelFour = require('./level-four');

var StartGame = require('./start-game');
var Score = require('./score');

function Game (stage, canvas) {
  this.stage = stage;
  this.canvas = canvas;
  this.score = new Score();
  this.startGame = new StartGame(canvas);
  this.levelOne = new LevelOne(canvas);
  this.gameNumber = 0;
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
    this.drawLevelFour(context);
  } else if (this.stage === 5) {
    this.drawEndGame(context);
  }
};

Game.prototype.drawStartGame = function(context) {
  var startImage = new Image();
  startImage.addEventListener("load", function(){}, false);
  startImage.src = './images/portal-start.png';
  context.drawImage(startImage, 0, 0, 1024, 640);
  this.beginLevelOne();
};

Game.prototype.drawEndGame = function(context) {
  context.fillText('Game over. To start a new game press Enter.', 300, 300);
  context.fillText('Total Number of Attempts: ' + this.score.totalAttempts(), 300, 320);
  var startY = 340;
  Object.keys(sessionStorage).forEach(function (key) {
    context.fillText(key + ": " + sessionStorage[key], 300, startY);
    startY += 20;
  });
  this.beginLevelOne();
};

Game.prototype.beginLevelOne = function() {
  if (this.startGame.listener.start) {
    this.stage = 1;
    this.startGame.listener.start = false;
    this.score = new Score();
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
  this.levelOne.userInfoDraw.draw(this.levelOne.firstPlayer, context, this.stage, this.score.levelOneAttempts);
  if (this.levelOne.firstPlayer.dead){
    alert('Dead!');
    this.levelOne = new LevelOne(this.canvas);
    this.score.levelOneAttempts += 1;
  }
  if (this.levelOne.detector.levelComplete) {
    this.stage = 2;
    this.score.levelOneAttempts += 1;
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
  this.levelTwo.userInfoDraw.draw(this.levelTwo.firstPlayer, context, this.stage, this.score.levelTwoAttempts);
  if (this.levelTwo.firstPlayer.dead){
    alert('Dead!');
    this.levelTwo = new LevelTwo(this.canvas);
    this.score.levelTwoAttempts += 1;
  }
  if (this.levelTwo.detector.levelComplete) {
    this.stage = 3;
    this.score.levelTwoAttempts += 1;
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
  this.levelThree.userInfoDraw.draw(this.levelThree.firstPlayer, context, this.stage, this.score.levelThreeAttempts);
  if (this.levelThree.firstPlayer.dead){
    alert('Dead!');
    this.levelThree = new LevelThree(this.canvas);
    this.score.levelThreeAttempts += 1;
  }
  if (this.levelThree.detector.levelComplete) {
    this.stage = 4;
    this.score.levelThreeAttempts += 1;
    this.levelFour = new LevelFour(this.canvas);
  }
};

Game.prototype.drawLevelFour = function(context) {
  this.levelFour.blocks.forEach(function(block){
    block.draw(context);
  });
  this.levelFour.firstPlayer.draw(context).move();
  if (this.levelFour.projectiles.blue) {
    this.levelFour.projectiles.blue.draw(context).move();
  }
  if (this.levelFour.projectiles.orange) {
    this.levelFour.projectiles.orange.draw(context).move();
  }
  this.levelFour.detector.playerCollisions(this.levelFour.firstPlayer, this.levelFour.blocks);
  this.levelFour.detector.projectileCollisions(this.levelFour.projectiles, this.levelFour.blocks);
  this.levelFour.userInfoDraw.draw(this.levelFour.firstPlayer, context, this.stage, this.score.levelFourAttempts);
  if (this.levelFour.firstPlayer.dead){
    alert('Dead!');
    this.levelFour = new LevelFour(this.canvas);
    this.score.levelFourAttempts += 1;
  }
  if (this.levelFour.detector.levelComplete) {
    this.stage = 5;
    this.score.levelFourAttempts += 1;
    this.gameNumber += 1;
    sessionStorage.setItem('Game ' + this.gameNumber + ' Attempts', this.score.totalAttempts());
    this.levelOne = new LevelOne(this.canvas);
  }
};

module.exports = Game;
