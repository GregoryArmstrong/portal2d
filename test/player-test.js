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
      assert.equal(player.y, 55);
    });
    it('doesnt move below the bottom boundary, and dies', function(){
      player.y = 621;
      player.hitBottom();
      assert.equal(player.y, 620);
      assert.equal(player.dead, true);
    });
    it('can change projectile type', function(){
      let projectile = new Projectile({});
      assert.equal(player.projectileType, 'blue');
      player.setProjectileColor(projectile);
      assert.equal(projectile.blue, true);
    });
    it('creates projectile and fires to the left', function(){
      var projectile = player.fireLeft();
      assert.equal(player.image, player.leftImage);
      assert.equal(projectile.blue, true);
      assert.equal(projectile.x, player.x);
      assert.equal(projectile.y, player.y + 22);
    });
    it('creates projectile and fires up', function(){
      var projectile = player.fireUp();
      assert.equal(player.image, player.upImage);
      assert.equal(projectile.blue, true);
      assert.equal(projectile.x, player.x + 36);
      assert.equal(projectile.y, player.y);
    });
    it('creates projectile and fires down', function(){
      var projectile = player.fireDown();
      assert.equal(player.image, player.downImage);
      assert.equal(projectile.blue, true);
      assert.equal(projectile.x, player.x + 12);
      assert.equal(projectile.y, player.y + 42);
    });
    it('creates projectile and fires to the right', function(){
      var projectile = player.fireRight();
      assert.equal(player.image, player.rightImage);
      assert.equal(projectile.blue, true);
      assert.equal(projectile.x, player.x + 44);
      assert.equal(projectile.y, player.y + 22);
    });
    it('makes player jump up', function(){
      assert.equal(player.y, 620);
      player.jump();
      assert.equal(player.image, player.rightImage);
      assert.equal(player.x, 10);
      assert.equal(player.y, 520);
    });
  });
});
