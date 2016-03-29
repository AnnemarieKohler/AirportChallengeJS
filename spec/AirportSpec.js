describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = "Plane";
  });

  describe("landing", function() {
    it("adds a plane", function() {
      airport.land(plane);
      expect(airport.planes()).toContain(plane);
    });
  });

  describe("take off", function() {
    it("removes the plane", function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
