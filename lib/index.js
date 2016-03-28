// var block = require('./block');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var firstPlayer = new Player({x: 10});

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  firstPlayer.draw().move();
  requestAnimationFrame(gameLoop);
};

function Player(options) {
  options = options || {};
  this.x = options.x || 10;
  this.y = options.y || 20;
  this.width = options.width || 10;
  this.height = options.height || 25;
};

Player.prototype.draw = function () {
  if (this.x > (canvas.width - 10)) {
    this.x = (canvas.width - 10);
  } else if ( this.x < 0 ) {
    this.x = 0;
  };
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Player.prototype.move = function () {
  this.y++;
  this.hitBottom();
  return this;
};

Player.prototype.hitBottom = function () {
  var rockBottom = canvas.height - this.height;
  if (this.y > rockBottom) {
    this.y = rockBottom;
  };
};

canvas.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) {
    console.log('right key pressed');
    firstPlayer.x++;
  };
});

canvas.addEventListener('keydown', function (event) {
  if (event.keyCode === 37) {
    console.log('left key pressed');
    firstPlayer.x--;
  };
});
