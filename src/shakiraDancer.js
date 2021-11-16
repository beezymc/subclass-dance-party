var makeShakiraDancer = function (top, left, timeBetweenSteps) {
  //this.$node = $('<span class="makeShakiraDancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("makeShakiraDancer");
  this.$node.append("<img src=./utils/shakira.jpeg alt=SH>");
};

makeShakiraDancer.prototype = Object.create(makeDancer.prototype);

makeShakiraDancer.prototype.walk = function (context) {
  let currTop = parseInt(context.$node.css("top"));
  currTop -= 20;
  context.$node.css({top: currTop + "px" });
};

makeShakiraDancer.prototype.bounce = function (context) {
  let currTop = parseInt(context.$node.css("top"));
  // if (currTop <= 0) {
  //   currTop = "90%";
  //   context.$node.css({ top: currTop });
  // }
};

makeShakiraDancer.prototype.moveRandomizer = function(context) {
  let moveArr = [makeShakiraDancer.prototype.walk(context), makeShakiraDancer.prototype.bounce(context)];
  let randomIndex = Math.floor(Math.random() * moveArr.length);
  moveArr[randomIndex];
};

makeShakiraDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  makeShakiraDancer.prototype.moveRandomizer(this);


};

makeShakiraDancer.prototype.lineup = function(context) {
  var styleSettings = {
    left: '90%'
  };
  clearTimeout(this.timeout);
  setTimeout(()=>{ this.$node.css(styleSettings); }, this.timeBetweenSteps);
};

makeShakiraDancer.prototype.constructor = makeShakiraDancer;