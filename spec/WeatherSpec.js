describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe("stormy weather", function() {
    it("can be stormy", function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isStormy()).toBeTruthy();
    });

    it("can be sunny", function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      expect(weather.isStormy()).toBeFalsy();
    });
  });
});
