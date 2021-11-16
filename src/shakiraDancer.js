var makeShakiraDancer = function (top, left, timeBetweenSteps) {
  //this.$node = $('<span class="makeShakiraDancer"></span>');
  makeDancer.apply(this, arguments);
  this.$node.addClass("makeShakiraDancer");
  this.$node.append("<img src=./utils/shakira.jpeg alt=SH>");
};

makeShakiraDancer.prototype = Object.create(makeDancer.prototype);
makeShakiraDancer.prototype.constructor = makeShakiraDancer;

makeShakiraDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);


};