const chai = require('chai');
const assert = chai.assert;

const LevelOneLayout = require('../lib/level-one-layout');

describe('Level One Layout', function() {
  let levelOneLayout = new LevelOneLayout([]);
  context('default attributes', function() {
    it('should set blocks', function(){
      assert.equal(levelOneLayout.blocks.length, 0);
    });
    it('should set xValues', function(){
      assert.equal(levelOneLayout.xValues.toString(), [0, 64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960].toString());
    });
    it('should set yValues', function(){
      assert.equal(levelOneLayout.yValues.toString(), [64, 128, 192, 256, 320, 384, 448, 512].toString());
    });
  });

  context('create boundaries', function() {
    it('build the top boundary', function(){
      levelOneLayout.createTopBoundary(levelOneLayout.blocks);
      assert.equal(levelOneLayout.blocks.length, 16);
    });
    it('build the bottom boundary', function(){
      levelOneLayout.createBottomBoundary(levelOneLayout.blocks);
      assert.equal(levelOneLayout.blocks.length, 28);
    });
    it('build the left boundary', function(){
      levelOneLayout.createLeftBoundary(levelOneLayout.blocks);
      assert.equal(levelOneLayout.blocks.length, 36);
    });
    it('build the right boundary', function(){
      levelOneLayout.createRightBoundary(levelOneLayout.blocks);
      assert.equal(levelOneLayout.blocks.length, 44);
    });
    it('build the lava', function(){
      levelOneLayout.createLava(levelOneLayout.blocks);
      assert.equal(levelOneLayout.blocks.length, 48);
    });
    it('build the door', function(){
      levelOneLayout.addDoor(levelOneLayout.blocks);
      assert.equal(levelOneLayout.blocks.length, 49);
    });
  });
});
