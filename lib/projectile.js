function Projectile(options){
  options = options || {};
  this.x = options.x;
  this.y = options.y;
  this.height = options.height || 20;
  this.width = options.width || 20;
  this.velocity = options.velocity || {x: 0, y: 0};
  this.image = options.image || './images/blue-projectile.gif';
  this.blueProjectileImage = './images/blue-projectile.gif';
  this.orangeProjectileImage = './images/orange-projectile.gif';
  this.blue = options.blue;
  this.orange = options.orange;
  this.collisions = options.collisions;
}

Projectile.prototype.draw = function (context) {
  var image = new Image();
  image.addEventListener("load", function(){}, false);
  image.src = this.image;
  context.drawImage(image, this.x, this.y, 20, 20);
  return this;
};

Projectile.prototype.move = function () {
  this.x = (this.x + this.velocity.x) || this.x;
  this.y = (this.y + this.velocity.y) || this.y;
};

module.exports = Projectile;
