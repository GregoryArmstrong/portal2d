function Detector(player, blocks, projectiles){
  this.player = player;
  this.blocks = blocks;
  this.projectiles = projectiles;
}

Detector.prototype.playerCollisions = function (player){
  this.blocks.forEach(function(block){
    if (((player.x >= (block.x - 64)) && (player.x <= (block.x + 128))) && ((player.y >= (block.y - 64)) && (player.y <= (block.y + 128)))) {
      // do stuff here
    }
  });
};

module.exports = Detector;
