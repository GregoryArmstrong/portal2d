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
  this.addDoor(this.blocks);
};

Level.prototype.createTopBoundary = function(blocks){
  this.xValues.forEach(function(value){
    blocks.push(new Block({x: value, y: 0, collisions: [3], wall: true}));
  });
};

Level.prototype.createBottomBoundary = function(blocks){
  this.xValues.forEach(function(value){
    if (!(value === 320 || value === 384 || value === 448 || value === 512 || value === 576 || value === 640)) {
      blocks.push(new Block({x: value, y: 576, collisions: [1], wall: true}));
    }
  });
  blocks.push(new Block({x: 320, y: 576, collisions: [1, 2], wall: true}));
  blocks.push(new Block({x: 640, y: 576, collisions: [1, 4], wall: true}));
};

Level.prototype.createLeftBoundary = function(blocks){
  this.yValues.forEach(function(value){
    blocks.push(new Block({x: 0, y: value, collisions: [2], wall: true}));
  });
};

Level.prototype.createRightBoundary = function(blocks){
  this.yValues.forEach(function(value){
    blocks.push(new Block({x: 960, y: value, collisions: [4], wall: true}));
  });
};

Level.prototype.createLava = function(blocks){
  blocks.push(new Block({x: 384, y: 576, image: './images/lava.png', wall: false, lava: true}));
  blocks.push(new Block({x: 448, y: 576, image: './images/lava.png', wall: false, lava: true}));
  blocks.push(new Block({x: 512, y: 576, image: './images/lava.png', wall: false, lava: true}));
  blocks.push(new Block({x: 576, y: 576, image: './images/lava.png', wall: false, lava: true}));
};

Level.prototype.addDoor = function(blocks){
  blocks.push(new Block({x: 704, y: 512, image: './images/door.png', collisions: [1, 2, 4], wall: false, door: true}));
};

module.exports = Level;
