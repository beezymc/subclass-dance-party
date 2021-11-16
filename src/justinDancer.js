var makeJustinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("makeJustinDancer");
  this.$node.append("<img src=./utils/justin.jpeg alt=JT>");
  this.$node.mouseover(() => { makeJustinDancer.prototype.circular(this); });
};

makeJustinDancer.prototype = Object.create(makeDancer.prototype);

makeJustinDancer.prototype.circular = function (context) {
  context.$node.toggleClass("rotate");
};

makeJustinDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

makeJustinDancer.prototype.lineup = function (context) {
  var styleSettings = {
    left: '90%'
  };
  clearTimeout(this.timeout);
  setTimeout(()=>{ this.$node.css(styleSettings); }, this.timeBetweenSteps);
};

makeJustinDancer.prototype.constructor = makeJustinDancer;