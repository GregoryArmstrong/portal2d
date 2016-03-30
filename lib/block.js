function Block(options){
  this.options = options;
  this.x = options.x;
  this.y = options.y;
  this.width = 64;
  this.height = 64;
  this.door = 'http://piskel-imgstore-b.appspot.com/img/8bce2440-f613-11e5-9268-1b60fb12fd3a.gif';
  this.orangePortal = 'http://piskel-imgstore-b.appspot.com/img/da7d7ca3-f60d-11e5-829b-1b60fb12fd3a.gif';
  this.bluePortal = 'http://piskel-imgstore-b.appspot.com/img/9cc93500-f60e-11e5-a41c-1b60fb12fd3a.gif';
  this.image = options.image || 'http://piskel-imgstore-b.appspot.com/img/26494bd1-f601-11e5-be4d-1b60fb12fd3a.gif';
}

Block.prototype.draw = function (context) {
  var wallImage = new Image();
  wallImage.addEventListener("load", function(){}, false);
  wallImage.src = this.image;
  context.drawImage(wallImage, this.x, this.y, this.width, this.height);
  return this;
};

module.exports = Block;