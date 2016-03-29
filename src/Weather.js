function Weather() {

}

Weather.prototype.isStormy = function() {
  return (Math.ceil(Math.random() * 4) % 4 === 0)
}
