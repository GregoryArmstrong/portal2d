var Block = require('./block');

function LevelFourLayout(blocks){
  this.blocks = blocks;
  this.xValues = [0, 64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960];
  this.yValues = [64, 128, 192, 256, 320, 384, 448, 512];
}

LevelFourLayout.prototype.buildLevel = function(){
  this.createTopBoundary(this.blocks);
  this.createBottomBoundary(this.blocks);
  this.createLeftBoundary(this.blocks);
  this.createRightBoundary(this.blocks);
  this.createLava(this.blocks);
  this.addObstacles(this.blocks);
  this.addDoor(this.blocks);
};

LevelFourLayout.prototype.createTopBoundary = function(blocks){
  this.xValues.forEach(function(value){
    blocks.push(new Block({x: value, y: 0, collisions: [3], wall: true}));
  });
};

LevelFourLayout.prototype.createBottomBoundary = function(blocks){
  this.xValues.forEach(function(value){
    blocks.push(new Block({x: value, y: 576, collisions: [1], wall: true}));
  });
};

LevelFourLayout.prototype.createLeftBoundary = function(blocks){
  this.yValues.forEach(function(value){
    blocks.push(new Block({x: 0, y: value, collisions: [1, 2], wall: true}));
  });
};

LevelFourLayout.prototype.createRightBoundary = function(blocks){
  this.yValues.forEach(function(value){
    blocks.push(new Block({x: 960, y: value, collisions: [4], wall: true}));
  });
};

LevelFourLayout.prototype.createLava = function(blocks){
  blocks.push(new Block({x: this.xValues[6], y: this.yValues[7], image: './images/lava.png', wall: false, lava: true, collisions: [1, 2, 3, 4]}));
  blocks.push(new Block({x: this.xValues[7], y: this.yValues[7], image: './images/lava.png', wall: false, lava: true, collisions: [1, 2, 3, 4]}));
  blocks.push(new Block({x: this.xValues[8], y: this.yValues[7], image: './images/lava.png', wall: false, lava: true, collisions: [1, 2, 3, 4]}));
  blocks.push(new Block({x: this.xValues[9], y: this.yValues[7], image: './images/lava.png', wall: false, lava: true, collisions: [1, 2, 3, 4]}));
  blocks.push(new Block({x: this.xValues[10], y: this.yValues[7], image: './images/lava.png', wall: false, lava: true, collisions: [1, 2, 3, 4]}));
  blocks.push(new Block({x: this.xValues[11], y: this.yValues[7], image: './images/lava.png', wall: false, lava: true, collisions: [1, 2, 3, 4]}));
  blocks.push(new Block({x: this.xValues[12], y: this.yValues[7], image: './images/lava.png', wall: false, lava: true, collisions: [1, 2, 3, 4]}));
  blocks.push(new Block({x: this.xValues[13], y: this.yValues[7], image: './images/lava.png', wall: false, lava: true, collisions: [1, 2, 3, 4]}));
  blocks.push(new Block({x: this.xValues[14], y: this.yValues[7], image: './images/lava.png', wall: false, lava: true, collisions: [1, 2, 3, 4]}));
};

LevelFourLayout.prototype.addDoor = function(blocks){
  blocks.push(new Block({x: this.xValues[11], y: this.yValues[1], image: './images/door.png', collisions: [1, 2, 4], wall: false, door: true}));
};

LevelFourLayout.prototype.addObstacles = function(blocks){
  blocks.push(new Block({x: this.xValues[1], y: this.yValues[1],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[3], y: this.yValues[0],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[3], y: this.yValues[1],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[3], y: this.yValues[2],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[3], y: this.yValues[3],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[3], y: this.yValues[6],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[3], y: this.yValues[7],  collisions: [ 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[5], y: this.yValues[0],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[5], y: this.yValues[1],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[5], y: this.yValues[3],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[5], y: this.yValues[4],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[5], y: this.yValues[5],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[5], y: this.yValues[6],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[5], y: this.yValues[7],  collisions: [2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[10], y: this.yValues[0],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[10], y: this.yValues[1],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[10], y: this.yValues[2],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[11], y: this.yValues[2],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[12], y: this.yValues[2],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[12], y: this.yValues[4],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[11], y: this.yValues[6],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[14], y: this.yValues[6],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[7], y: this.yValues[5],  collisions: [1, 2, 3, 4], wall: true}));
  blocks.push(new Block({x: this.xValues[9], y: this.yValues[4],  collisions: [1, 2, 3, 4], wall: true}));
};

module.exports = LevelFourLayout;
