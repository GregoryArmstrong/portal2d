const chai = require('chai');
const assert = chai.assert;

const Score = require('../lib/score');

describe('Score', function() {
  let score = new Score();
  context('default attributes', function() {
    it('should set level one attempts', function(){
      assert.equal(score.levelOneAttempts, 0);
    });
    it('should set level two attempts', function(){
      assert.equal(score.levelTwoAttempts, 0);
    });
    it('should set level three attempts', function(){
      assert.equal(score.levelThreeAttempts, 0);
    });
  });

  context('functions', function() {
    it('should sum up the number of attempts', function(){
      score.levelOneAttempts += 2;
      score.levelTwoAttempts += 1;
      score.levelThreeAttempts += 3;
      assert.equal(score.totalAttempts(), 6);
    });
  });
});
