const expect = require('chai').expect;
const { FPSTracker } = require('./index.js');

describe('FPSTracker', function() {
  it('test framerate calculation (each frame ~20ms)', function() {
    //  mock  time
    let millisNow = new Date().getTime();
    function increaseTime(millis) {
      millisNow += millis;
    }
    const mockDateNow = jest.spyOn(global.Date, 'now').mockImplementation(() => millisNow);

    for (let i = 0; i < 200; i++) {
      increaseTime(10 + Math.random() * 20);  //  random between 10-30ms
      FPSTracker.tick();
    }

    console.log("FrameRate:", FPSTracker.frameRate);
    expect(FPSTracker.frameRate).to.be.closeTo(50, 10);

    for (let i = 0; i < 200; i++) {
      increaseTime(400 + Math.random() * 200);  //  random between 400-600ms
      FPSTracker.tick();
    }

    console.log("FrameRate:", FPSTracker.frameRate);
    expect(FPSTracker.frameRate).to.be.closeTo(2, .5);
  });
});
