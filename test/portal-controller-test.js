const chai = require('chai');
const assert = chai.assert;

const PortalController = require('../lib/portal-controller');
const Block = require('../lib/block');
const Projectile = require('../lib/projectile');

describe('PortalController', function() {
  context('functions', function() {
    it('should revert a portal', function(){
      let projectile = new Projectile({x: 10, y: 10, collisions: 4});
      let projectiles = {blue: projectile, orange: null};
      let bluePortal = new Block({x: 400, y: 130, wall: true});
      bluePortal.bluePortal = true;
      bluePortal.portalLocation = 4;
      let portals = {blue: null, orange: null};
      let portalController = new PortalController(projectile, portals, bluePortal, projectile.collisions, projectiles);
      portalController.revertPortal(bluePortal, 'blue');
      assert.equal(bluePortal.bluePortal, false);
    });
  });
});
