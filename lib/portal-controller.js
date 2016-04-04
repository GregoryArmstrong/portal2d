function PortalController(projectile, portals, block, projectileCollisions, projectiles) {
  this.findAndReplacePortal(projectile, portals, 'blue', block, projectileCollisions, projectiles);
  this.findAndReplacePortal(projectile, portals, 'orange', block, projectileCollisions, projectiles);
}

PortalController.prototype.findAndReplacePortal = function (projectile, portals, color, block, projectileCollisions, projectiles) {
  if (projectile[color]) {
    if (portals[color]) {
      this.revertPortal(portals[color], color);
    }
    this.setPortal(portals, block, color, projectileCollisions, projectiles);
  }
};

PortalController.prototype.setPortal = function (portals, block, color, projectileCollisions, projectiles) {
  portals[color] = null;
  block.openPortal(projectileCollisions, color);
  projectiles[color] = null;
  portals[color] = block;

  if (portals.orange === portals.blue){
    this.clearPortals(portals);
  }
};

PortalController.prototype.clearPortals = function (portals) {
    this.revertPortal(portals.orange, 'orange');
    this.revertPortal(portals.blue, 'blue');
    portals.orange = null;
    portals.blue = null;
};

PortalController.prototype.revertPortal = function (portal, color) {
  portal[color + 'Portal'] = false;
  portal.image = portal.wallImage;
  delete portal.portalLocation;
};

module.exports = PortalController;
