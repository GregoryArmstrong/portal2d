var Player = require('./player');
var Projectile = require('./projectile');

function Detector(player, blocks, projectiles){
  this.player = player;
  this.blocks = blocks;
  this.projectiles = projectiles;
}

Detector.prototype.playerCollisions = function (player){
  this.blocks.forEach(function(block){
    if (block.collisions.includes(1)) {
      checkBlockTopCollision(player, block);
    }
    if (block.collisions.includes(2)) {
      checkBlockRightCollision(player, block);
    }
    if (block.collisions.includes(3)) {
      checkBlockBottomCollision(player, block);
    }
    if (block.collisions.includes(4)) {
      checkBlockLeftCollision(player, block);
    }
  });
};

function checkBlockBottomCollision (player, block) {
  if ((player.x >= block.x) && (player.x <= (block.x + 64))) {
    if (((player.y <= (block.y + 73)) && (player.y > (block.y + 63)))) {
      player.y = block.y + 74;
    }
  }
}

function checkBlockTopCollision (player, block) {
  if ((player.x >= block.x) && (player.x <= (block.x + 64))) {
    if ((player.y >= (block.y - 63)) && (player.y < block.y)) {
      player.y = block.y - 64;
    }
  }
}

function checkBlockLeftCollision (player, block) {
  if ((player.y >= block.y) && (player.y <= (block.y + 64))) {
    if ((player.x >= (block.x - 42)) && (player.x <= (block.x))) {
      player.x = block.x - 43;
    }
  }
}

function checkBlockRightCollision (player, block) {
  if ((player.y >= block.y) && (player.y <= (block.y + 64))) {
    if ((player.x >= (block.x + 40)) && (player.x <= (block.x + 54))) {
      player.x = block.x + 55;
    }
  }
}
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
