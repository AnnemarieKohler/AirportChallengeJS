function Airport(weather_class) {
  hanger = new Array();
  weather = weather_class || (new Weather());
}

Airport.prototype.land = function(plane) {
  hanger.push(plane);
}

Airport.prototype.planes = function() {
  return hanger;
  // return weather.isStormy();
}

Airport.prototype.takeOff = function(plane) {
  if (weather.isStormy()) {
    return hanger[hanger.indexOf(plane)];
  }
  else {
    return hanger.splice((hanger.indexOf(plane)), 1);
  }
}
