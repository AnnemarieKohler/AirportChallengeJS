/* eslint-env browser,jasmine */

describe('Airport', function () {
  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = 'Plane';
  });
  it('instructs a plane to land', function () {
    airport.instructLanding(plane);
    expect(airport.hanger).toContain(plane);
  });
  it('instruct a plane to take off', function () {
    airport.instructLanding(plane);
    airport.instructTakeOff(plane);
    expect(airport.hanger).not.toContain(plane);
  });
});
