function Block(options){
  this.options = options;
  this.x = options.x;
  this.y = options.y;
  this.width = 64;
  this.height = 64;
  this.wall = options.wall;
  this.lava = options.lava;
  this.door = options.door;
  this.bluePortal = false;
  this.orangePortal = false;
  this.doorImage = './images/door.png';
  this.orangePortalImage = './images/orange-portal.gif';
  this.bluePortalImage = './images/blue-portal.gif';
  this.image = options.image || './images/wall1.png';
  this.wallImage = './images/wall1.png';
  this.collisions = options.collisions || [];
}

Block.prototype.draw = function (context) {
  var wallImage = new Image();
  wallImage.addEventListener("load", function(){}, false);
  wallImage.src = this.image;
  context.drawImage(wallImage, this.x, this.y, this.width, this.height);
  return this;
};

Block.prototype.openPortal = function(portalLocation, color){
  if (color === 'blue') {
    this['orangePortal'] = false;
  } else if (color === 'orange') {
    this['bluePortal'] = false;
  }
  this[color + 'Portal'] = true;
  this.image = this[color + 'PortalImage'];
  this.portalLocation = portalLocation;
};

module.exports = Block;
