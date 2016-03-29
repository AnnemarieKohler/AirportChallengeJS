describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = "Plane";
  });

  describe("landing", function() {
    it("lands a plane", function() {
      airport.land(plane);
      expect(airport.planes()).toEqual([plane]);
    });
  });
});
