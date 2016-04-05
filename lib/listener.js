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
  this.firing();
  this.moveRight();
  this.moveLeft();
  this.jump();
  this.toggleProjectileType();
};

Listener.prototype.toggleProjectileType = function () {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 32) {
      if (this.player.projectileType === 'blue') {
        this.player.projectileType = 'orange';
      } else if (this.player.projectileType === 'orange') {
        this.player.projectileType = 'blue';
      }
    }
  }.bind(this));
};

Listener.prototype.firing = function () {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 68) {
      var projectile = this.player.fireRight();
      if ((projectile.blue && !this.projectiles.blue) || (projectile.orange && !this.projectiles.orange)){
        this.createProjectile(projectile);
      }
    } else if (event.keyCode === 65) {
      var projectile = this.player.fireLeft();
      if ((projectile.blue && !this.projectiles.blue) || (projectile.orange && !this.projectiles.orange)){
        this.createProjectile(projectile);
      }
    } else if (event.keyCode === 87) {
      var projectile = this.player.fireUp();
      if ((projectile.blue && !this.projectiles.blue) || (projectile.orange && !this.projectiles.orange)){
        this.createProjectile(projectile);
      }
    } else if (event.keyCode === 88) {
      var projectile = this.player.fireDown();
      if ((projectile.blue && !this.projectiles.blue) || (projectile.orange && !this.projectiles.orange)){
        this.createProjectile(projectile);
      }
    }
  }.bind(this));
};

Listener.prototype.createProjectile = function(options) {
  if (this.player.projectileType === 'blue') {
    this.projectiles.blue = new Projectile(options);
  } else if (this.player.projectileType === 'orange'){
    this.projectiles.orange = new Projectile(options);
    this.projectiles.orange.image = this.projectiles.orange.orangeProjectileImage;
  }
};

Listener.prototype.moveRight = function() {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 39) {
      this.player.x = this.player.x + 5;
      this.player.image = this.player.rightImage;
    }
  }.bind(this));
};

Listener.prototype.jump = function() {
  this.canvas.addEventListener('keyup', function (event) {
    if (event.keyCode === 38) {
      this.player.jump();
    }
  }.bind(this));
};

Listener.prototype.moveLeft = function() {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
      this.player.x = this.player.x - 5;
      this.player.image = this.player.leftImage;
    }
  }.bind(this));
};

module.exports = Listener;
