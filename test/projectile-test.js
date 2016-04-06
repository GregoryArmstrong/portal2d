const chai = require('chai');
const assert = chai.assert;

const Projectile = require('../lib/projectile');

describe('Projectile', function() {
  let projectile = new Projectile({});
  context('default attributes', function() {
    it('should set a default height attribute', function(){
      assert.equal(projectile.height, 20);
    });
    it('should set a default width attribute', function(){
      assert.equal(projectile.width, 20);
    });
    it('should set a default velocity', function(){
      assert.equal(projectile.velocity.x, 0);
      assert.equal(projectile.velocity.y, 0);
    });
    it('should set a default image', function(){
      assert.equal(projectile.image, './images/blue-projectile.gif');
    });
  });

  context('additional projectile options', function(){
    let projectile = new Projectile({x: 50, y: 50, velocity: {x: 5, y: 5}, blue: true, orange: false, collisions: [1]});
    it('can set an optional x', function(){
      assert.equal(projectile.x, 50);
    });
    it('can set an optional y', function(){
      assert.equal(projectile.y, 50);
    });
    it('can set an optional x velocity', function(){
      assert.equal(projectile.velocity.x, 5);
    });
    it('can set an optional y velocity', function(){
      assert.equal(projectile.velocity.y, 5);
    });
    it('can set an optional blue', function(){
      assert.equal(projectile.blue, true);
    });
    it('can set an optional orange', function(){
      assert.equal(projectile.orange, false);
    });
    it('can set an optional collisions', function(){
      assert.equal(projectile.collisions[0], [1]);
    });
  });

  context('functions appropriately change attributes', function(){
    let projectile = new Projectile({x: 50, y: 50, velocity: {x: 5, y: 5}});
    it('should change x and y value upon calling move', function(){
      assert.equal(projectile.x, 50);
      assert.equal(projectile.y, 50);
      projectile.move();
      assert.equal(projectile.x, 55);
      assert.equal(projectile.y, 55);
    });
  });
});
