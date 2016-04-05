function Score () {
  this.highestLevelCompleted = 0;
  this.levelOneAttempts = 0;
  this.levelTwoAttempts = 0;
  this.levelThreeAttempts = 0;
}

Score.prototype.totalAttempts = function () {
  return this.levelOneAttempts + this.levelTwoAttempts + this.levelThreeAttempts;
};

Score.prototype.updateHighestLevelCompleted = function (level) {
  if (level > this.highestLevelCompleted) {
    this.highestLevelCompleted = level;
  }
};

module.exports = Score;
