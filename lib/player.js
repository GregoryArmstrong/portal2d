function Player(options) {
  options = options || {};
  this.x = options.x || 10;
  this.y = options.y || 20;
  this.width = 64;
  this.height = 64;
  this.leftImage = './images/chell-left.gif';
  this.rightImage = './images/chell-right.gif';
  this.image = this.rightImage;
  this.collisions = options.collisions || [1, 3];
  this.projectileType = 'blue';
}

Player.prototype.fireLeft = function() {
  var projectile = {x: (this.x), y: (this.y + 22), velocity: {x: -16, y: 0}, collisions: 2, blue: true};
  this.image = this.leftImage;
  return projectile;
};

Player.prototype.fireRight = function() {
  var projectile = {x: (this.x + 44), y: (this.y + 22), velocity: {x: 16, y: 0}, collisions: 4, blue: true};
  this.image = this.rightImage;
  return projectile;
};

Player.prototype.draw = function (context) {
  if (this.x > (1024 - 64)) {
    this.x = (1024 - 64);
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
  var rockBottom = 640 - 64;
  if (this.y > rockBottom) {
    this.y = rockBottom;
  }
};

module.exports = Player;
