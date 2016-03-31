function Projectile(options){
  options = options || {};
  this.x = options.x || 50;
  this.y = options.y || 50;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.velocity = options.velocity || {x: 0, y: 0};
}

Projectile.prototype.draw = function (context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Projectile.prototype.move = function () {
  this.x = (this.x + this.velocity.x) || this.x;
  this.y = (this.y + this.velocity.y) || this.y;
};

module.exports = Projectile;
