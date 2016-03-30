/* eslint-env browser,jasmine */

describe('Weather', function () {
  var weather;
  beforeEach(function () {
    weather = new Weather();
  });
  it ('can be stormy', function () {
    spyOn(Math, 'random').and.returnValue(0.20);
    expect(weather.isStormy()).toEqual(true);
  });
  it ('can be sunny', function () {
    spyOn(Math, 'random').and.returnValue(0.80);
    expect(weather.isStormy()).toEqual(false);
  });
});