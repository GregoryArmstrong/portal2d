var Block = require('./block');

function LevelThreeLayout(blocks) {
  this.blocks = blocks;
  this.xValues = [0, 64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960];
  this.yValues = [64, 128, 192, 256, 320, 384, 448, 512];
}

LevelThreeLayout.prototype.buildLevel = function(){
  this.createTopBoundary(this.blocks);
  this.createBottomBoundary(this.blocks);
  this.createLeftBoundary(this.blocks);
  this.createRightBoundary(this.blocks);
  this.createLava(this.blocks);
  this.addDoor(this.blocks);
  this.addObstacles(this.blocks);
};

LevelThreeLayout.prototype.createTopBoundary = function(blocks){
  this.xValues.forEach(function(value){
    blocks.push(new Block({x: value, y: 0, collisions: [3], wall: true}));
  });
};

LevelThreeLayout.prototype.createBottomBoundary = function(blocks){
  this.xValues.forEach(function(value){
    blocks.push(new Block({x: value, y: 576, collisions: [1], wall: true}));
  });
};

LevelThreeLayout.prototype.createLeftBoundary = function(blocks){
  this.yValues.forEach(function(value){
    if ((value !== 448)) {
      blocks.push(new Block({x: 0, y: value, collisions: [2], wall: true}));
    }
  });
  blocks.push(new Block({x: 0, y: 448, collisions: [1, 2], wall: true}));
};

LevelThreeLayout.prototype.createRightBoundary = function(blocks){
  this.yValues.forEach(function(value){
    blocks.push(new Block({x: 960, y: value, collisions: [4], wall: true}));
  });
  blocks.push(new Block({x: this.xValues[14], y: this.yValues[2], wall: true, collisions: [1, 3, 4]}));
  blocks.push(new Block({x: this.xValues[14], y: this.yValues[7], wall: true, collisions: []}));
  blocks.push(new Block({x: this.xValues[14], y: this.yValues[6], wall: true, collisions: [1]}));
  blocks.push(new Block({x: this.xValues[13], y: this.yValues[5], wall: true, collisions: [1]}));
  blocks.push(new Block({x: this.xValues[13], y: this.yValues[6], wall: true, collisions: [1]}));
  blocks.push(new Block({x: this.xValues[13], y: this.yValues[7], wall: true, collisions: []}));
  blocks.push(new Block({x: this.xValues[12], y: this.yValues[6], wall: true, collisions: [1]}));
  blocks.push(new Block({x: this.xValues[12], y: this.yValues[7], wall: true, collisions: []}));
  blocks.push(new Block({x: this.xValues[11], y: this.yValues[5], wall: true, collisions: [1]}));
  blocks.push(new Block({x: this.xValues[11], y: this.yValues[6], wall: true, collisions: [4]}));
  blocks.push(new Block({x: this.xValues[11], y: this.yValues[7], wall: true, collisions: [4]}));
};

LevelThreeLayout.prototype.createLava = function(blocks){
  blocks.push(new Block({x: this.xValues[12], y: this.yValues[5], image: './images/lava.png', wall: false, lava: true}));
  blocks.push(new Block({x: this.xValues[14], y: this.yValues[5], image: './images/lava.png', wall: false, lava: true}));
};

LevelThreeLayout.prototype.addDoor = function(blocks){
  blocks.push(new Block({x: this.xValues[10], y: this.yValues[7], image: './images/door.png', collisions: [1, 2, 4], wall: false, door: true}));
};

LevelThreeLayout.prototype.addObstacles = function(blocks){
  blocks.push(new Block({x: this.xValues[1], y: this.yValues[5], wall: true, collisions: [1, 2, 3]}));
  blocks.push(new Block({x: this.xValues[1], y: this.yValues[4], wall: true, collisions: [1, 2]}));
  blocks.push(new Block({x: this.xValues[1], y: this.yValues[3], wall: true, collisions: [1, 2]}));
  blocks.push(new Block({x: this.xValues[2], y: this.yValues[5], wall: true, collisions: [1, 2, 3]}));
  blocks.push(new Block({x: this.xValues[2], y: this.yValues[4], wall: true, collisions: [1, 2]}));
  blocks.push(new Block({x: this.xValues[3], y: this.yValues[5], wall: true, collisions: [1, 2, 3]}));
  blocks.push(new Block({x: this.xValues[5], y: this.yValues[5], wall: true, collisions: [2, 3, 4]}));
  blocks.push(new Block({x: this.xValues[6], y: this.yValues[7], wall: true, collisions: [2, 4]}));
  blocks.push(new Block({x: this.xValues[6], y: this.yValues[6], wall: true, collisions: [2, 4]}));
  blocks.push(new Block({x: this.xValues[6], y: this.yValues[5], wall: true, collisions: [2, 4]}));
  blocks.push(new Block({x: this.xValues[6], y: this.yValues[4], wall: true, collisions: [2, 4]}));
  blocks.push(new Block({x: this.xValues[6], y: this.yValues[3], wall: true, collisions: [1, 2, 4]}));
};

module.exports = LevelThreeLayout;
