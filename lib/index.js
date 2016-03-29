var Player = require('./player');
var Projectile = require('./projectile');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var firstPlayer = new Player({x: 10});
var projectiles = [];

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  firstPlayer.draw(context).move();
  projectiles.forEach(function(projectile){
    projectile.draw(context).move();
  });
  requestAnimationFrame(gameLoop);
};

canvas.addEventListener('keydown', function (event) {
  if (event.keyCode === 68) {
    var givenVelocity = {x: (firstPlayer.x + 44), y: (firstPlayer.y + 22), velocity: {x: 5, y: 0}};
    console.log('D key pressed');
    firstPlayer.image = firstPlayer.rightImage;
    createProjectile(givenVelocity);
  } else if (event.keyCode === 65) {
    var givenVelocity = {x: (firstPlayer.x + 10), y: (firstPlayer.y + 22), velocity: {x: -5, y: 0}};
    console.log('A key pressed');
    firstPlayer.image = firstPlayer.leftImage;
    createProjectile(givenVelocity);
  };
});

function createProjectile(options) {
  projectiles.push(new Projectile(options));
}

canvas.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) {
    console.log('right key pressed');
    firstPlayer.x++;
    firstPlayer.image = firstPlayer.rightImage;
  };
});

canvas.addEventListener('keydown', function (event) {
  if (event.keyCode === 37) {
    console.log('left key pressed');
    firstPlayer.x--;
    firstPlayer.image = firstPlayer.leftImage;
  };
});
