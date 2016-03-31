function Block(options){
  this.options = options;
  this.x = options.x;
  this.y = options.y;
  this.width = 64;
  this.height = 64;
  this.wall = options.wall || true;
  this.lava = options.lava || false;
  this.door = options.door || false;
  this.bluePortal = options.bluePortal || false;
  this.orangePortal = options.orangePortal || false;
  this.doorImage = './images/door.png';
  this.orangePortalImage = 'http://piskel-imgstore-b.appspot.com/img/da7d7ca3-f60d-11e5-829b-1b60fb12fd3a.gif';
  this.bluePortalImage = 'http://piskel-imgstore-b.appspot.com/img/9cc93500-f60e-11e5-a41c-1b60fb12fd3a.gif';
  // this.image = options.image || 'http://piskel-imgstore-b.appspot.com/img/26494bd1-f601-11e5-be4d-1b60fb12fd3a.gif';
  this.image = options.image || './images/wall1.png';
  this.collisions = options.collisions || [];
}

Block.prototype.draw = function (context) {
  var wallImage = new Image();
  wallImage.addEventListener("load", function(){}, false);
  wallImage.src = this.image;
  context.drawImage(wallImage, this.x, this.y, this.width, this.height);
  return this;
};

Block.prototype.openBluePortal = function(portalLocation){
  this.wall = false;
  this.bluePortal = true;
  this.image = this.bluePortalImage;
  this.portalLocation = portalLocation;
};

Block.prototype.openOrangePortal = function(portalLocation){
  this.wall = false;
  this.orangePortal = true;
  this.image = this.orangePortalImage;
  this.portalLocation = portalLocation;
};

module.exports = Block;
