const chai = require('chai');
const assert = chai.assert;

const Detector = require('../lib/detector');

describe('Detector', function(){
  let detector = new Detector({});
  context('with default attributes', function(){
    it('should assign portals hash', function(){
      assert.deepEqual(detector.portals, {blue: null, orange: null});
    });
    it('should assign levelComplete', function(){
      assert.equal(detector.levelComplete, false);
    });
  });
});
