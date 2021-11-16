var makeBrittanyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("makeBrittanyDancer");
  this.$node.append("<img src=./utils/brittany.jpeg alt=JT>");
};

makeBrittanyDancer.prototype = Object.create(makeDancer.prototype);

makeBrittanyDancer.prototype.bounceInRandomDirection = function () {
  let currLeft = parseInt(this.$node.css("left"));
  let currTop = parseInt(this.$node.css("top"));
  var moveLeft = function (currLeft, currTop, context) {
    currLeft -= 200;
    console.log("Left", currLeft);
    context.$node.css({left: currLeft + "px" });
  };
  var moveRight = function (currLeft, currTop, context) {
    currLeft += 200;
    console.log("Right", currLeft);
    context.$node.css({left: currLeft + "px" });
  };
  var moveUp = function (currLeft, currTop, context) {
    currTop += 200;
    context.$node.css({top: currTop + "px" });
  };
  var moveDown = function (currLeft, currTop, context) {
    currTop -= 200;
    context.$node.css({top: currTop + "px" });
  };
  let bounceArr = [moveLeft, moveRight, moveUp, moveDown];
  let randomIndex = Math.floor(Math.random() * bounceArr.length);
  bounceArr[randomIndex](currLeft, currTop, this);
};

makeBrittanyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};

makeBrittanyDancer.prototype.lineup = function (context) {
  var styleSettings = {
    left: '90%'
  };
  clearTimeout(this.timeout);
  setTimeout(()=>{ this.$node.css(styleSettings); }, this.timeBetweenSteps);
};

makeBrittanyDancer.prototype.constructor = makeBrittanyDancer;