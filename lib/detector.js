var Player = require('./player');
var Projectile = require('./projectile');
var _ = require('lodash');

function Detector(player, blocks, projectiles){
  this.player = player;
  this.blocks = blocks;
  this.projectiles = projectiles;
  this.portals = {blue: null, orange: null};
}

Detector.prototype.playerCollisions = function (player){
  this.blocks.forEach(function(block){
    if (block.collisions.includes(1)) {
      this.checkBlockTopPlayerCollision(player, block);
    }
    if (block.collisions.includes(2)) {
      this.checkBlockRightPlayerCollision(player, block);
    }
    if (block.collisions.includes(3)) {
      this.checkBlockBottomPlayerCollision(player, block);
    }
    if (block.collisions.includes(4)) {
      this.checkBlockLeftPlayerCollision(player, block);
    }
  }.bind(this));
};

Detector.prototype.projectileCollisions = function (projectiles) {
  _.filter(this.blocks, {'wall': true }).forEach(function(block){
    this.checkBlockProjectileCollision(projectiles, block);
  }.bind(this));
};

Detector.prototype.checkBlockProjectileCollision = function (projectiles, block) {
  if (projectilesExist(projectiles)) {
    _.compact(_.values(projectiles)).forEach(function(projectile){
      if (projectileCanCollideWithBlock(block.collisions, projectile.collisions)) {
        if (checkXYCollision(projectile, block)) {
          findAndReplacePortal(projectile, this.portals, 'blue', block, projectile.collisions, projectiles);
          findAndReplacePortal(projectile, this.portals, 'orange', block, projectile.collisions, projectiles);
        }
      }
    }.bind(this));
  }
};

function projectilesExist(projectiles) {
  return projectiles.blue || projectiles.orange;
}

function projectileCanCollideWithBlock (blockCollisions, projectileCollisions) {
  return blockCollisions.includes(projectileCollisions);
}

function findAndReplacePortal (projectile, portals, color, block, projectileCollisions, projectiles) {
  if (projectile[color]) {
    if (portals[color]) {
      revertPortal(portals[color], color);
    }
    setPortal(portals, block, color, projectileCollisions, projectiles);
  }
}

function checkXYCollision(projectile, block) {
  return ((projectile.x >= block.x) && (projectile.x <= (block.x + 64))) && ((projectile.y >= block.y) && (projectile.y <= (block.y + 64)));
}

function setPortal(portals, block, color, projectileCollisions, projectiles) {
  portals[color] = null;
  block.openPortal(projectileCollisions, color);
  projectiles[color] = null;
  portals[color] = block;
}

function revertPortal(portal, color) {
  portal[color + 'Portal'] = false;
  portal.image = portal.wallImage;
}

Detector.prototype.checkBlockBottomPlayerCollision = function (player, block) {
  if ((player.x >= block.x) && (player.x <= (block.x + 64))) {
    if (((player.y <= (block.y + 73)) && (player.y > (block.y + 63)))) {
      player.y = block.y + 74;
    }
  }
};

Detector.prototype.checkBlockTopPlayerCollision = function (player, block) {
  if ((player.x >= block.x) && (player.x <= (block.x + 64))) {
    if ((player.y >= (block.y - 63)) && (player.y < block.y)) {
      player.y = block.y - 64;
    }
  }
};

Detector.prototype.checkBlockLeftPlayerCollision = function (player, block) {
  if ((player.y >= block.y) && (player.y <= (block.y + 64))) {
    if ((player.x >= (block.x - 42)) && (player.x <= (block.x))) {
      player.x = block.x - 43;
    }
  }
};

Detector.prototype.checkBlockRightPlayerCollision = function (player, block) {
  if ((player.y >= block.y) && (player.y <= (block.y + 64))) {
    if ((player.x >= (block.x + 40)) && (player.x <= (block.x + 54))) {
      player.x = block.x + 55;
    }
  }
};

module.exports = Detector;
