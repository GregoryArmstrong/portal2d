function Projectile(options){
  options = options || {};
  this.x = options.x || 50;
  this.y = options.y || 50;
  this.height = options.height || 20;
  this.width = options.width || 20;
  this.velocity = options.velocity || {x: 0, y: 0};
  this.image = options.image || 'http://piskel-imgstore-b.appspot.com/img/7221ea94-f763-11e5-bf94-2f8fff29cce0.gif';
  this.blueProjectileImage = 'http://piskel-imgstore-b.appspot.com/img/7221ea94-f763-11e5-bf94-2f8fff29cce0.gif';
  this.orangeProjectileImage = 'http://piskel-imgstore-b.appspot.com/img/f060be80-f763-11e5-99a9-2f8fff29cce0.gif';
  this.blue = options.blue || true;
  this.orange = options.orange || false;
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
