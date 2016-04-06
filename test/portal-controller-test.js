const chai = require('chai');
const assert = chai.assert;

const PortalController = require('../lib/portal-controller');
const Block = require('../lib/block');
const Projectile = require('../lib/projectile');

describe('PortalController', function() {
  context('functions', function() {
    it('should revert a portal', function() {
      let projectile = new Projectile({x: 10, y: 10, collisions: 4});
      let projectiles = {blue: projectile, orange: null};
      let bluePortal = new Block({x: 400, y: 130, wall: true});
      bluePortal.bluePortal = true;
      bluePortal.portalLocation = 4;
      let portals = {blue: bluePortal, orange: null};
      let portalController = new PortalController(projectile, portals, bluePortal, projectile.collisions, projectiles);
      portalController.revertPortal(bluePortal, 'blue');

      assert.equal(bluePortal.bluePortal, false);
    });

    it('should clear both portals', function() {
      let projectile = new Projectile({x: 10, y: 10, collisions: 4});
      let projectiles = {blue: projectile, orange: null};
      let bluePortal = new Block({x: 400, y: 130, wall: true});
      bluePortal.bluePortal = true;
      bluePortal.portalLocation = 4;
      let orangePortal = new Block({x: 100, y: 130, wall: true});
      orangePortal.orangePortal = true;
      orangePortal.portalLocation = 4;
      let portals = {blue: bluePortal, orange: orangePortal};
      let portalController = new PortalController(projectile, portals, bluePortal, projectile.collisions, projectiles);
      portalController.clearPortals(portals);

      assert.equal(portals.blue, null);
      assert.equal(portals.orange, null);
    });

    it('should set a portal', function() {
      let projectile = new Projectile({x: 10, y: 10, collisions: 4, blue: true});
      let projectiles = {blue: projectile, orange: null};
      let block = new Block({x: 100, y: 130, wall: true, collisions: [4]});
      let portals = {blue: null, orange: null};
      let portalController = new PortalController(projectile, portals, block, projectile.collisions, projectiles);
      portalController.setPortal(portals, block, 'blue', projectile.collisions, projectiles);

      assert.equal(portals.blue, block);
      assert.equal(portals.orange, null);
    });
  });
});
