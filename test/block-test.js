const chai = require('chai');
const assert = chai.assert;

const Block = require('../lib/block');

describe('Block', function(){
  let block = new Block({});
  context('with default attributes', function(){
    it('should assign width', function(){
      assert.equal(block.width, 64);
    });
    it('should assign height', function(){
      assert.equal(block.height, 64);
    });
    it('should not be a blue portal', function(){
      assert.equal(block.bluePortal, false);
    });
    it('should not be a orange portal', function(){
      assert.equal(block.orangePortal, false);
    });
    it('should assign wall image', function(){
      assert.equal(block.image, './images/wall1.png');
    });
  });

  context('with set options', function(){
    it('should be a lava type block', function(){
      let block = new Block({lava: true});
      assert.equal(block.lava, true);
    });
    it('should be a door type block', function(){
      let block = new Block({door: true});
      assert.equal(block.door, true);
    });
    it('should set x', function(){
      let block = new Block({x: 64});
      assert.equal(block.x, 64);
    });
    it('should set y', function(){
      let block = new Block({y: 64});
      assert.equal(block.y, 64);
    });
    it('should set collisions', function(){
      let block = new Block({collisions: [1,2,3,4]});
      assert.equal(block.collisions.toString(), [1,2,3,4].toString());
    });
  });

  context('functions appropriately change attributes', function(){
    it('should change block type when opening blue portal', function(){
      let block = new Block({wall: true});
      assert.equal(block.wall, true);
      block.openPortal(2, 'blue');
      assert.equal(block.bluePortal, true);
      assert.equal(block.image, block.bluePortalImage);
      assert.equal(block.portalLocation, 2);
    });
    it('should change block type when opening orange portal', function(){
      let block = new Block({wall: true});
      assert.equal(block.wall, true);
      block.openPortal(3, 'orange');
      assert.equal(block.orangePortal, true);
      assert.equal(block.image, block.orangePortalImage);
      assert.equal(block.portalLocation, 3);
    });
  });
});
