const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');

describe('Player', function() {
  let player = new Player({});
  context('with default attributes', function() {
    it('should assign an x coordinate', function() {
      assert.equal(player.x, 10);
    });
    it('should assign a y coordinate', function() {
      assert.equal(player.y, 20);
    });
    it('should assign a width value', function(){
      assert.equal(player.width, 64);
    });
    it('should assign a height value', function(){
      assert.equal(player.height, 64);
    });
    it('should assign a leftImage value', function(){
      assert.equal(player.leftImage, 'http://piskel-imgstore-b.appspot.com/img/923c071c-f54a-11e5-9ee4-6b573c758bb1.gif');
    });
    it('should assign a rightImage value', function(){
      assert.equal(player.rightImage, 'http://piskel-imgstore-b.appspot.com/img/1563a7a3-f54a-11e5-9a92-6b573c758bb1.gif');
    });
    it('should assign an image value', function(){
      assert.equal(player.image, player.rightImage);
    });
  });

  context('functions appropriately change attributes', function(){
    it('moves the player in the y axis', function(){
      player.move();
      assert.equal(player.y, 21);
    });
    it('doesnt move below the bottom boundary', function(){
      player.y = 550;
      player.hitBottom();
      assert.equal(player.y, 536);
    });
  });
});
