var makeShakiraDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="makeShakiraDancer"></span>');
  makeDancer.apply(this, arguments);
};

makeShakiraDancer.prototype = Object.create(makeDancer.prototype);
makeShakiraDancer.prototype.constructor = makeShakiraDancer;

makeShakiraDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};