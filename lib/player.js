function Player(options) {
  options = options || {};
  this.x = options.x || 10;
  this.y = options.y || 20;
  this.width = options.width || 10;
  this.height = options.height || 25;
};

Player.prototype.draw = function (context) {
  if (this.x > (1000 - 10)) {
    this.x = (1000 - 10);
  } else if ( this.x < 0 ) {
    this.x = 0;
  };
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Player.prototype.move = function () {
  this.y++;
  this.hitBottom();
  return this;
};

Player.prototype.hitBottom = function () {
  var rockBottom = 600 - this.height;
  if (this.y > rockBottom) {
    this.y = rockBottom;
  };
};

module.exports = Player;
