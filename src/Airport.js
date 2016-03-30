function Airport() {
  this.hanger = [];
}

// Airport.prototype.getHanger = function () {
//   return this.hanger;
// };

Airport.prototype.instructLanding = function (plane) {
  this.hanger.push(plane);
};

Airport.prototype.instructTakeOff = function (plane) {
  this.hanger.splice(this.hanger.indexOf(plane), 1);
};
