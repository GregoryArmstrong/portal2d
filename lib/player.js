var Projectile = require('./projectile');

function Player(options) {
  options = options || {};
  this.x = options.x || 10;
  this.y = options.y || 20;
  this.width = 64;
  this.height = 64;
  this.leftImage = 'http://piskel-imgstore-b.appspot.com/img/923c071c-f54a-11e5-9ee4-6b573c758bb1.gif';
  this.rightImage = 'http://piskel-imgstore-b.appspot.com/img/1563a7a3-f54a-11e5-9a92-6b573c758bb1.gif';
  this.image = this.rightImage;
}

Player.prototype.fireLeft = function() {
  var projectile = {x: (this.x + 10), y: (this.y + 22), velocity: {x: -5, y: 0}};
  this.image = this.leftImage;
  return projectile;
};

Player.prototype.fireRight = function() {
  var projectile = {x: (this.x + 44), y: (this.y + 22), velocity: {x: 5, y: 0}};
  this.image = this.rightImage;
  return projectile;
};



Player.prototype.draw = function (context) {
  if (this.x > (1000 - 64)) {
    this.x = (1000 - 64);
  } else if ( this.x < 0 ) {
    this.x = 0;
  }
  var chellImage = new Image();
  chellImage.addEventListener("load", function(){}, false);
  chellImage.src = this.image;
  context.drawImage(chellImage, this.x, this.y, 64, 64);
  return this;
};

Player.prototype.move = function () {
  this.y++;
  this.hitBottom();
  return this;
};

Player.prototype.hitBottom = function () {
  var rockBottom = 600 - 64;
  if (this.y > rockBottom) {
    this.y = rockBottom;
  }
};

module.exports = Player;
