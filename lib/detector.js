var Player = require('./player');
var Projectile = require('./projectile');
var PortalController = require('./portal-controller');
var _ = require('lodash');

function Detector(player, blocks, projectiles){
  this.player = player;
  // this.blocks = blocks;
  this.projectiles = projectiles;
  this.portals = {blue: null, orange: null};
  this.levelComplete = false;
}

Detector.prototype.playerCollisions = function (player, blocks){
  blocks.forEach(function(block){
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

Detector.prototype.projectileCollisions = function (projectiles, blocks) {
  _.filter(blocks, {'wall': true }).forEach(function(block){
    this.checkBlockProjectileCollision(projectiles, block);
  }.bind(this));
};

Detector.prototype.checkBlockProjectileCollision = function (projectiles, block) {
  if (projectilesExist(projectiles)) {
    _.compact(_.values(projectiles)).forEach(function(projectile){
      if (projectileCanCollideWithBlock(block.collisions, projectile.collisions)) {
        if (checkXYCollision(projectile, block)) {
          new PortalController(projectile, this.portals, block, projectile.collisions, projectiles);
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

function checkXYCollision(projectile, block) {
  return ((projectile.x >= block.x) && (projectile.x <= (block.x + 64))) && ((projectile.y >= block.y) && (projectile.y <= (block.y + 64)));
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
  if ((player.y >= block.y) && (player.y <= (block.y + 63))) {
    if ((player.x >= (block.x - 42)) && (player.x <= (block.x))) {
      this.levelCompleteCheck(player, block);
      if (this.bothPortalsOpen()) {
        this.teleportPlayer(player, block);
      } else {
        player.x = block.x - 43;
      }
    }
  }
};

Detector.prototype.checkBlockRightPlayerCollision = function (player, block) {
  if ((player.y >= block.y) && (player.y <= (block.y + 63))) {
    if ((player.x >= (block.x + 40)) && (player.x <= (block.x + 54))) {
      this.levelCompleteCheck(player, block);
      if (this.bothPortalsOpen()) {
        this.teleportPlayer(player, block);
      } else {
        player.x = block.x + 55;
      }
    }
  }
};

Detector.prototype.bothPortalsOpen = function () {
  return this.portals.blue && this.portals.orange;
};

Detector.prototype.levelCompleteCheck = function (player, block) {
  if (block.door) {
    this.levelComplete = true;
  }
};

function teleportAdjustment (block) {
  switch (block.portalLocation) {
    case 1:
      return {x: 0, y: -50};
    case 2:
      return {x: 64, y: 0};
    case 3:
      return {x: 0, y: 50};
    case 4:
      return {x: -50, y: 0};
  }
}

Detector.prototype.teleportPlayer = function (player, block) {
  if (block.bluePortal) {
    var orangeDisplacement = teleportAdjustment(this.portals.orange);
    player.x = (this.portals.orange.x + orangeDisplacement.x);
    player.y = (this.portals.orange.y + orangeDisplacement.y);
  } else if (block.orangePortal) {
    var blueDisplacement = teleportAdjustment(this.portals.blue);
    player.x = (this.portals.blue.x + blueDisplacement.x);
    player.y = (this.portals.blue.y + blueDisplacement.y);
  }
};

module.exports = Detector;
