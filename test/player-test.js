const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Projectile = require('../lib/projectile');

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
      assert.equal(player.leftImage, './images/chell-left.gif');
    });
    it('should assign a rightImage value', function(){
      assert.equal(player.rightImage, './images/chell-right.gif');
    });
    it('should assign an image value', function(){
      assert.equal(player.image, player.rightImage);
    });
    it('should assign first default collision', function(){
      assert.equal(player.collisions[0], [1]);
    });
    it('should assign second default collision', function(){
      assert.equal(player.collisions[1], [3]);
    });
    it('should assign a projectileType', function(){
      assert.equal(player.projectileType, 'blue');
    });
    it('should assign a false dead attribute', function(){
      assert.equal(player.dead, false);
    });
  });

  context('functions appropriately change attributes', function(){
    it('moves the player in the y axis', function(){
      player.move();
      assert.equal(player.y, 25);
    });
    it('doesnt move below the bottom boundary, and dies', function(){
      player.y = 620;
      player.hitBottom();
      assert.equal(player.y, 576);
      assert.equal(player.dead, true);
    });
    it('can change projectile type', function(){
      let projectile = new Projectile({});
      assert.equal(player.projectileType, 'blue');
      player.setProjectileColor(projectile);
      assert.equal(projectile.blue, true);
    });
  });
});
