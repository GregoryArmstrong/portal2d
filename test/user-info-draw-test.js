const chai = require('chai');
const assert = chai.assert;

const UserInfoDraw = require('../lib/user-info-draw');

describe('User Info Draw', function() {
  let userInfoDraw = new UserInfoDraw();
  context('default attributes', function() {
    it('should set blue projectile image', function(){
      assert.equal(userInfoDraw.blueProjectileImage, './images/blue-projectile.gif');
    });
    it('should set orange projectile image', function(){
      assert.equal(userInfoDraw.orangeProjectileImage, './images/orange-projectile.gif');
    });
    it('should set x', function(){
      assert.equal(userInfoDraw.x, 900);
    });
    it('should set y', function(){
      assert.equal(userInfoDraw.y, 70);
    });
  });
});
