const chai = require('chai');
const assert = chai.assert;

const Detector = require('../lib/detector');
const Player = require('../lib/player');
const Block = require('../lib/block');
const Projectile = require('../lib/projectile');

describe('Detector', function(){

  let detector = new Detector();
  context('with default attributes', function(){
    it('should assign portals hash', function(){
      assert.deepEqual(detector.portals, {blue: null, orange: null});
    });
    it('should assign levelComplete', function(){
      assert.equal(detector.levelComplete, false);
    });
  });

  context('should set options', function(){
    it('should set player', function () {
      let player = new Player();
      let detector = new Detector(player);
      assert.equal(detector.player.x, player.x);
    });

    it('should set projectiles', function () {
      let player = new Player();
      let block = new Block({x: 64, y: 64});
      let projectile = new Projectile({x: 10, y: 10});
      let projectiles = {blue: projectile, orange: null};
      let detector = new Detector(player, [block], projectiles);
      assert.equal(detector.projectiles.blue.x, 10);
    });
  });

  context('should detect collisions and change player location', function(){
    it('should detect bottom of block collisions', function(){
      let player = new Player({x: 420, y: 130});
      let block = new Block({x: 400, y: 64, wall: true, lava: false});
      let detector = new Detector();
      detector.checkBlockBottomPlayerCollision(player, block);
      assert.equal(player.x, 420);
      assert.equal(player.y, 138);
    });

    it('should detect top of block collisions', function(){
      let player = new Player({x: 420, y: 68});
      let block = new Block({x: 400, y: 130, wall: true, lava: false});
      let detector = new Detector();
      detector.checkBlockTopPlayerCollision(player, block);
      assert.equal(player.x, 420);
      assert.equal(player.y, 66);
    });

    it('should detect left of block collisions', function(){
      let player = new Player({x: 400, y: 130});
      let block = new Block({x: 400, y: 130, wall: true, lava: false});
      let detector = new Detector();
      detector.checkBlockLeftPlayerCollision(player, block);
      assert.equal(player.x, 357);
      assert.equal(player.y, 130);
    });

    it('should detect right of block collisions', function(){
      let player = new Player({x: 426, y: 130});
      let block = new Block({x: 400, y: 130, wall: true, lava: false});
      let detector = new Detector();
      detector.checkBlockRightPlayerCollision(player, block);
      assert.equal(player.x, 455);
      assert.equal(player.y, 130);
    });
  });

  context('check if portals are open', function(){
    it('both portals are not open', function(){
      let detector = new Detector();
      assert.equal(detector.bothPortalsOpen(), null);
    });

    it('one portal is open', function(){
      let portal = new Block({x: 400, y: 130, wall: true, bluePortal: false});
      let detector = new Detector();
      detector.portals.blue = portal;
      assert.equal(detector.bothPortalsOpen(), null);
    });

    it('both portals are open', function(){
      let bluePortal = new Block({x: 400, y: 130, wall: true, bluePortal: false});
      let orangePortal = new Block({x: 100, y: 130, wall: true, orangePortal: false});
      let detector = new Detector();
      detector.portals.blue = bluePortal;
      detector.portals.orange = orangePortal;
      assert(detector.bothPortalsOpen());
    });
  });

  context('for level complete', function(){
    it('should return true if door', function(){
      let detector = new Detector();
      let block = new Block({x: 400, y: 130, door: true});
      let player = new Player({x: 426, y: 130});
      detector.levelCompleteCheck(player, block);
      assert(detector.levelComplete);
    });

    it('should return false if not a door', function(){
      let detector = new Detector();
      let block = new Block({x: 400, y: 130, wall: true});
      let player = new Player({x: 426, y: 130});
      detector.levelCompleteCheck(player, block);
      assert.equal(detector.levelComplete, false);
    });
  });

  context('detector moves player through portal', function(){
    it('from blue portal to orange portal (right to left)', function(){
      let player = new Player({x: 426, y: 130});
      let bluePortal = new Block({x: 400, y: 130, wall: true});
      bluePortal.portalLocation = 4;
      bluePortal.bluePortal = true;
      let orangePortal = new Block({x: 100, y: 130, wall: true});
      orangePortal.portalLocation = 2;
      orangePortal.orangePortal = true;
      let detector = new Detector();
      detector.portals.blue = bluePortal;
      detector.portals.orange = orangePortal;
      detector.teleportPlayer(player, detector.portals.blue);

      assert.equal(player.x, 164);
      assert.equal(player.y, 130);
    });

    it('from orange portal to blue portal (left to right)', function(){
      let player = new Player({x: 426, y: 130});
      let bluePortal = new Block({x: 400, y: 130, wall: true});
      bluePortal.portalLocation = 4;
      bluePortal.bluePortal = true;
      let orangePortal = new Block({x: 100, y: 130, wall: true});
      orangePortal.portalLocation = 2;
      orangePortal.orangePortal = true;
      let detector = new Detector();
      detector.portals.blue = bluePortal;
      detector.portals.orange = orangePortal;
      detector.teleportPlayer(player, detector.portals.orange);

      assert.equal(player.x, 350);
      assert.equal(player.y, 130);
    });

    it('from blue portal to orange portal (left to top)', function(){
      let player = new Player({x: 426, y: 130});
      let bluePortal = new Block({x: 400, y: 130, wall: true});
      bluePortal.portalLocation = 2;
      bluePortal.bluePortal = true;
      let orangePortal = new Block({x: 100, y: 130, wall: true});
      orangePortal.portalLocation = 3;
      orangePortal.orangePortal = true;
      let detector = new Detector();
      detector.portals.blue = bluePortal;
      detector.portals.orange = orangePortal;
      detector.teleportPlayer(player, detector.portals.blue);

      assert.equal(player.x, 100);
      assert.equal(player.y, 180);
    });
  });

  context('detect projectile collisions', function () {
    it('should open portal if projectile collides with block', function (){
      let player = new Player({x: 426, y: 130});
      let block = new Block({x: 64, y: 64, collisions: [2]});
      let projectile = new Projectile({x: 65, y: 65, collisions: 2, blue: true});
      let projectiles = {blue: projectile, orange: null};
      let detector = new Detector(player, [block], projectiles);
      detector.checkBlockProjectileCollision(projectiles, block);

      assert(block.bluePortal);
    });
  });
});
