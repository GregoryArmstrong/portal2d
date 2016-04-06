const chai = require('chai');
const assert = chai.assert;

const LevelTwoLayout = require('../lib/level-two-layout');

describe('Level Two Layout', function() {
  let levelTwoLayout = new LevelTwoLayout([]);
  context('default attributes', function() {
    it('should set blocks', function(){
      assert.equal(levelTwoLayout.blocks.length, 0);
    });
    it('should set xValues', function(){
      assert.equal(levelTwoLayout.xValues.toString(), [0, 64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960].toString());
    });
    it('should set yValues', function(){
      assert.equal(levelTwoLayout.yValues.toString(), [64, 128, 192, 256, 320, 384, 448, 512].toString());
    });
  });

  context('create boundaries', function() {
    it('build the top boundary', function(){
      levelTwoLayout.createTopBoundary(levelTwoLayout.blocks);
      assert.equal(levelTwoLayout.blocks.length, 16);
    });
    it('build the bottom boundary', function(){
      levelTwoLayout.createBottomBoundary(levelTwoLayout.blocks);
      assert.equal(levelTwoLayout.blocks.length, 28);
    });
    it('build the left boundary', function(){
      levelTwoLayout.createLeftBoundary(levelTwoLayout.blocks);
      assert.equal(levelTwoLayout.blocks.length, 36);
    });
    it('build the right boundary', function(){
      levelTwoLayout.createRightBoundary(levelTwoLayout.blocks);
      assert.equal(levelTwoLayout.blocks.length, 44);
    });
    it('build the lava', function(){
      levelTwoLayout.createLava(levelTwoLayout.blocks);
      assert.equal(levelTwoLayout.blocks.length, 48);
    });
    it('build the door', function(){
      levelTwoLayout.addDoor(levelTwoLayout.blocks);
      assert.equal(levelTwoLayout.blocks.length, 49);
    });
    it('build the obstacles', function(){
      levelTwoLayout.addObstacles(levelTwoLayout.blocks);
      assert.equal(levelTwoLayout.blocks.length, 58);
    });
  });
});
