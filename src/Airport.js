function Airport(weather_class) {
  hanger = new Array();
  weather = weather_class || (new Weather());
}

Airport.prototype.land = function(plane) {
  hanger.push(plane);
}

Airport.prototype.planes = function() {
  // return hanger;
  return weather.isStormy();
}

Airport.prototype.takeOff = function(plane) {
  if (!weather.isStormy()) {
    hanger.splice((hanger.indexOf(plane)), 1);
  }
}
