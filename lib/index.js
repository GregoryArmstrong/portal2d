var Player = require('./player');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var firstPlayer = new Player({x: 10});

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  firstPlayer.draw(context).move();
  requestAnimationFrame(gameLoop);
};

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
