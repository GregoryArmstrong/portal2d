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
  if (projectiles.blue || projectiles.orange) {
    _.compact(_.values(projectiles)).forEach(function(projectile){
      if (block.collisions.includes(projectile.collisions)) {
        if ((projectile.x >= block.x) && (projectile.x <= (block.x + 64))) {
          if ((projectile.y >= block.y) && (projectile.y <= (block.y + 64))) {
            if (projectile.blue) {
              if (this.portals.blue) {
                this.portals.blue.bluePortal = false;
                this.portals.blue.image = this.portals.blue.wallImage;
              }
              this.portals.blue = null;
              block.openBluePortal(projectile.collisions);
              projectiles.blue = null;
              this.portals.blue = block;
            } else if (projectile.orange) {
              if (this.portals.orange) {
                this.portals.orange.orangePortal = false;
                this.portals.orange.image = this.portals.orange.wallImage;
              }
              this.portals.orange = null;
              block.openOrangePortal(projectile.collisions);
              projectiles.orange = null;
              this.portals.orange = block;
            }
          }
        }
      }
    }.bind(this));
  }
};

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
// need to limit collision detection to only realistic collisions. If a block is on the bottom of the screen,
// why check for collisions of the bottom or sides of the block? Perhaps each block has a attribute of some kind which lists which sides
// are able to be collided with? Each block is then checked for which side is collideable, if what is colliding with it makes sense, and then
// verifies that mathematically.
// For projectiles, if theyre traveling in x+ direction, only collisions on the left side of blocks should be checked. For x- projectiles,
// only the right side, etc.

//            __ = 1           ---> bullet = 4
//       4 = |  | = 2          <--- bullet = 2
//           |__| = 3           /| bullet = 3, \/ bullet = 1


module.exports = Detector;
