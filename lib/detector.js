function Detector(player, blocks, projectiles){
  this.player = player;
  this.blocks = blocks;
  this.projectiles = projectiles;
}

// Detector.prototype.playerCollisions = function (player){
//   this.blocks.forEach(function(block){
//
//
//
//
//
//
//     if ((player.x >= (block.x - 32)) && (player.x <= (block.x + 32))) {
//       if ((player.y >= (block.y - 64)) && (player.y <= (block.y + 128))){
//         player.y = block.y - 64;
//
//       }
//     }
//   });
// };

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
