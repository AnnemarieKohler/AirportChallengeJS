describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    weather = jasmine.createSpyObj('weather', ['isStormy']);
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

    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });

    it("doesnt allow plane to leave if stormy", function() {
      airport = new Airport(weather);
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).toContain(plane);
    });
  });


});
