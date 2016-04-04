var Projectile = require('./projectile');

var Listener = function(canvas, player, projectiles) {
  this.canvas = canvas;
  this.player = player;
  this.projectiles = projectiles;
  this.start = false;
};

Listener.prototype.startGame = function () {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 13){
      this.start = true;
    }
  }.bind(this));
};

Listener.prototype.setListeners = function () {
  this.firing(this.player, this.projectiles);
  this.moveRight(this.player);
  this.moveLeft(this.player);
  this.toggleProjectileType(this.player);
};

Listener.prototype.toggleProjectileType = function (player) {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 32) {
      if (player.projectileType === 'blue') {
        player.projectileType = 'orange';
      } else if (player.projectileType === 'orange') {
        player.projectileType = 'blue';
      }
    }
  });
};

Listener.prototype.firing = function (player, projectiles) {
  function createProjectile(options) {
    if (player.projectileType === 'blue') {
      projectiles.blue = new Projectile(options);
    } else if (player.projectileType === 'orange'){
      projectiles.orange = new Projectile(options);
      projectiles.orange.image = projectiles.orange.orangeProjectileImage;
    }
  }
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 68) {
      var projectile = player.fireRight();
      if ((projectile.blue && !projectiles.blue) || (projectile.orange && !projectiles.orange)){
        createProjectile(projectile);
      }
    } else if (event.keyCode === 65) {
      var projectile = player.fireLeft();
      if ((projectile.blue && !projectiles.blue) || (projectile.orange && !projectiles.orange)){
        createProjectile(projectile);
      }
    }
  });
};

Listener.prototype.moveRight = function(player) {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 39) {
      player.x = player.x + 5;
      player.image = player.rightImage;
    }
  });
};

Listener.prototype.moveLeft = function(player) {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
      player.x = player.x - 5;
      player.image = player.leftImage;
    }
  });
};

module.exports = Listener;
