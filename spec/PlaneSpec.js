/* eslint-env browser,jasmine */

describe('Plane', function () {
  var plane;
  beforeEach(function() {
    plane = new Plane();
    plane.land();
  });
  it('can land and not be flying', function () {
    expect(plane.isFlying).toBeFalsy();
  });
  it('can take off and is flying', function() {
    plane.takeOff();
    expect(plane.isFlying).toBeTruthy();
  });
});
