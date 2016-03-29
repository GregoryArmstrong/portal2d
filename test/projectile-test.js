const chai = require('chai');
const assert = chai.assert;

const Projectile = require('../lib/projectile');

describe('Projectile', function() {
  let projectile = new Projectile({});
  context('default attributes', function() {
    it('should set a default x attribute', function() {
      assert.equal(projectile.x, 50);
    });
    it('should set a default y attribute', function(){
      assert.equal(projectile.y, 50);
    });
    it('should set a default height attribute', function(){
      assert.equal(projectile.height, 10);
    });
    it('should set a default width attribute', function(){
      assert.equal(projectile.width, 10);
    });
    it('should set a default velocity', function(){
      assert.equal(projectile.velocity.x, 0);
      assert.equal(projectile.velocity.y, 0);
    });
  });

  context('functions appropriately change attributes', function(){
    it('should change x value upon being moved in x axis', function(){
      projectile.move({x: 5});
      assert.equal(projectile.x, 55);
      projectile.move({x: -5});
      assert.equal(projectile.x, 50);
    });
    it('should change y value upon being moved in y axis', function(){
      projectile.move({y: 5});
      assert.equal(projectile.y, 55);
      projectile.move({y: -5});
      assert.equal(projectile.y, 50);
    })
  });
});
