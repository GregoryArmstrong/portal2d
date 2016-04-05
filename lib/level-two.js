var Player = require('./player');
var Listener = require('./listener');
var LevelTwoLayout = require('./level-two-layout');
var Detector = require('./detector');
var UserInfoDraw = require('./user-info-draw');

function LevelTwo(canvas, score) {
  this.blocks = [];
  this.projectiles = {blue: null, orange: null};
  this.firstPlayer = new Player({x: 300, y: 500});
  this.listener = new Listener(canvas, this.firstPlayer, this.projectiles, score);
  this.level = new LevelTwoLayout(this.blocks);
  this.detector = new Detector(this.firstPlayer, this.blocks, this.projectiles);
  this.userInfoDraw = new UserInfoDraw();
  this.listener.setListeners();
  this.level.buildLevel();
}

module.exports = LevelTwo;
