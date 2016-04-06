var Player = require('./player');
var Listener = require('./listener');
var LevelFourLayout = require('./level-four-layout');
var Detector = require('./detector');
var UserInfoDraw = require('./user-info-draw');

function LevelFour(canvas, score) {
  this.blocks = [];
  this.projectiles = {blue: null, orange: null};
  this.firstPlayer = new Player({x: 70, y: 70});
  this.listener = new Listener(canvas, this.firstPlayer, this.projectiles, score);
  this.level = new LevelFourLayout(this.blocks);
  this.detector = new Detector(this.firstPlayer, this.blocks, this.projectiles);
  this.userInfoDraw = new UserInfoDraw();
  this.listener.setListeners();
  this.level.buildLevel();
}

module.exports = LevelFour;
