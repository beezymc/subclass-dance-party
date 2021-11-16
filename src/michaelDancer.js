var makeMichaelDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeMichaelDancer.prototype = Object.create(makeDancer.prototype);

makeMichaelDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

makeMichaelDancer.prototype.constructor = makeMichaelDancer;