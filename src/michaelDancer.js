var makeMichaelDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("makeMichaelDancer");
  this.$node.append("<img src=./utils/michael.jpeg alt=MJ>");
};

makeMichaelDancer.prototype = Object.create(makeDancer.prototype);

makeMichaelDancer.prototype.moonwalk = function (context) {
  let currLeft = parseInt(context.$node.css("left"));
  currLeft -= 200;
  context.$node.css({left: currLeft + "px" });
};

makeMichaelDancer.prototype.backRight = function (context) {
  let currLeft = parseInt(context.$node.css("left"));
  if (currLeft <= 0) {
    currLeft = "90%";
    context.$node.css({ left: currLeft });
  }
};

makeMichaelDancer.prototype.moveRandomizer = function (context) {
  let moveArr = [makeMichaelDancer.prototype.moonwalk(context), makeMichaelDancer.prototype.backRight(context)];
  let randomIndex = Math.floor(Math.random() * moveArr.length);
  moveArr[randomIndex];
};

makeMichaelDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  makeMichaelDancer.prototype.moveRandomizer(this);
  // this.$node.toggle();
};

makeMichaelDancer.prototype.lineup = function (context) {

  var styleSettings = {
    left: '90%'
  };
  clearTimeout(this.timeout);
  setTimeout(()=>{ this.$node.css(styleSettings); }, this.timeBetweenSteps);
};

makeMichaelDancer.prototype.constructor = makeMichaelDancer;