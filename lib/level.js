var Block = require('./block');

function Level(blocks){
  this.stage = 1;
  this.blocks = blocks;
  if (this.stage === 1) {
    this.xValues = [0, 64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960];
    this.yValues = [64, 128, 192, 256, 320, 384, 448, 512];
  }
}

Level.prototype.buildLevel = function(){
  this.createTopBoundary(this.blocks);
  this.createBottomBoundary(this.blocks);
  this.createLeftBoundary(this.blocks);
  this.createRightBoundary(this.blocks);
  this.createLava(this.blocks);
};

Level.prototype.createTopBoundary = function(blocks){
  this.xValues.forEach(function(value){
    blocks.push(new Block({x: value, y: 0}));
  });
};

Level.prototype.createBottomBoundary = function(blocks){
  this.xValues.forEach(function(value){
    if (!(value === 384 || value === 448 || value === 512 || value === 576)) {
      blocks.push(new Block({x: value, y: 576}));
    }
  });
};

Level.prototype.createLeftBoundary = function(blocks){
  this.yValues.forEach(function(value){
    blocks.push(new Block({x: 0, y: value}));
  });
};

Level.prototype.createRightBoundary = function(blocks){
  this.yValues.forEach(function(value){
    blocks.push(new Block({x: 960, y: value}));
  });
};

Level.prototype.createLava = function(blocks){
  blocks.push(new Block({x: 384, y: 576, image: 'http://piskel-imgstore-b.appspot.com/img/3c2f3738-f60b-11e5-8aee-1b60fb12fd3a.gif'}));
  blocks.push(new Block({x: 448, y: 576, image: 'http://piskel-imgstore-b.appspot.com/img/3c2f3738-f60b-11e5-8aee-1b60fb12fd3a.gif'}));
  blocks.push(new Block({x: 512, y: 576, image: 'http://piskel-imgstore-b.appspot.com/img/3c2f3738-f60b-11e5-8aee-1b60fb12fd3a.gif'}));
  blocks.push(new Block({x: 576, y: 576, image: 'http://piskel-imgstore-b.appspot.com/img/3c2f3738-f60b-11e5-8aee-1b60fb12fd3a.gif'}));
};

module.exports = Level;
