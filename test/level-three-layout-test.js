const chai = require('chai');
const assert = chai.assert;

const LevelThreeLayout = require('../lib/level-three-layout');

describe('Level Three Layout', function() {
  let levelThreeLayout = new LevelThreeLayout([]);
  context('default attributes', function() {
    it('should set blocks', function(){
      assert.equal(levelThreeLayout.blocks.length, 0);
    });
    it('should set xValues', function(){
      assert.equal(levelThreeLayout.xValues.toString(), [0, 64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960].toString());
    });
    it('should set yValues', function(){
      assert.equal(levelThreeLayout.yValues.toString(), [64, 128, 192, 256, 320, 384, 448, 512].toString());
    });
  });

  context('create boundaries', function() {
    it('build the top boundary', function(){
      levelThreeLayout.createTopBoundary(levelThreeLayout.blocks);
      assert.equal(levelThreeLayout.blocks.length, 16);
    });
    it('build the bottom boundary', function(){
      levelThreeLayout.createBottomBoundary(levelThreeLayout.blocks);
      assert.equal(levelThreeLayout.blocks.length, 32);
    });
    it('build the left boundary', function(){
      levelThreeLayout.createLeftBoundary(levelThreeLayout.blocks);
      assert.equal(levelThreeLayout.blocks.length, 41);
    });
    it('build the right boundary', function(){
      levelThreeLayout.createRightBoundary(levelThreeLayout.blocks);
      assert.equal(levelThreeLayout.blocks.length, 60);
    });
    it('build the lava', function(){
      levelThreeLayout.createLava(levelThreeLayout.blocks);
      assert.equal(levelThreeLayout.blocks.length, 62);
    });
    it('build the door', function(){
      levelThreeLayout.addDoor(levelThreeLayout.blocks);
      assert.equal(levelThreeLayout.blocks.length, 63);
    });
    it('build the obstacles', function(){
      levelThreeLayout.addObstacles(levelThreeLayout.blocks);
      assert.equal(levelThreeLayout.blocks.length, 76);
    });
  });
});
