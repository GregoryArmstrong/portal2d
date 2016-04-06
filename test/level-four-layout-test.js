const chai = require('chai');
const assert = chai.assert;

const LevelFourLayout = require('../lib/level-four-layout');

describe('Level Four Layout', function() {
  let levelFourLayout = new LevelFourLayout([]);
  context('default attributes', function() {
    it('should set blocks', function(){
      assert.equal(levelFourLayout.blocks.length, 0);
    });
    it('should set xValues', function(){
      assert.equal(levelFourLayout.xValues.toString(), [0, 64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960].toString());
    });
    it('should set yValues', function(){
      assert.equal(levelFourLayout.yValues.toString(), [64, 128, 192, 256, 320, 384, 448, 512].toString());
    });
  });

  context('create boundaries', function() {
    it('build the top boundary', function(){
      levelFourLayout.createTopBoundary(levelFourLayout.blocks);
      assert.equal(levelFourLayout.blocks.length, 16);
    });
    it('build the bottom boundary', function(){
      levelFourLayout.createBottomBoundary(levelFourLayout.blocks);
      assert.equal(levelFourLayout.blocks.length, 32);
    });
    it('build the left boundary', function(){
      levelFourLayout.createLeftBoundary(levelFourLayout.blocks);
      assert.equal(levelFourLayout.blocks.length, 40);
    });
    it('build the right boundary', function(){
      levelFourLayout.createRightBoundary(levelFourLayout.blocks);
      assert.equal(levelFourLayout.blocks.length, 48);
    });
    it('build the lava', function(){
      levelFourLayout.createLava(levelFourLayout.blocks);
      assert.equal(levelFourLayout.blocks.length, 57);
    });
    it('build the door', function(){
      levelFourLayout.addDoor(levelFourLayout.blocks);
      assert.equal(levelFourLayout.blocks.length, 58);
    });
    it('build the obstacles', function(){
      levelFourLayout.addObstacles(levelFourLayout.blocks);
      assert.equal(levelFourLayout.blocks.length, 82);
    });
  });
});
