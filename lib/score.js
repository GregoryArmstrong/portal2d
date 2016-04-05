function Score () {
  this.levelOneAttempts = 0;
  this.levelTwoAttempts = 0;
  this.levelThreeAttempts = 0;
}

Score.prototype.totalAttempts = function () {
  return this.levelOneAttempts + this.levelTwoAttempts + this.levelThreeAttempts;
};

module.exports = Score;
