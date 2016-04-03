function UserInfoDraw () {
  this.blueProjectileImage = './images/blue-projectile.gif';
  this.orangeProjectileImage = './images/orange-projectile.gif';
  this.x = 900;
  this.y = 70;
}

UserInfoDraw.prototype.drawProjectileType = function(player, context, level){
  var projectileImage = new Image();
  projectileImage.addEventListener("load", function(){}, false);
  projectileImage.src = this[player.projectileType + 'ProjectileImage'];
  context.drawImage(projectileImage, this.x, this.y, 40, 40);
  context.font = '20px serif';
  context.fillText('Current Portal:', this.x-120, this.y+27);
  context.fillText('Level: ' + level, 100, this.y+27);
  return this;
};

module.exports = UserInfoDraw;
