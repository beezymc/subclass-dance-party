var makeMichaelDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("makeMichaelDancer");
  this.$node.append("<img src=./utils/michael.jpeg alt=MJ>");
};

makeMichaelDancer.prototype = Object.create(makeDancer.prototype);

makeMichaelDancer.prototype.circular = function (context) {
  context.$node.toggleClass("rotate");
};

makeMichaelDancer.prototype.moonwalk = function (context) {
  context.$node.animate({left: "-=100px"});
};

makeMichaelDancer.prototype.backRight = function (context) {
  if (parseInt(context.$node.css("left")) <= 0) {
    context.$node.animate({left: "+=1000px"});
  }
};

makeMichaelDancer.prototype.moveRandomizer = function (context) {
  let moveArr = [makeMichaelDancer.prototype.circular(context), makeMichaelDancer.prototype.moonwalk(context), makeMichaelDancer.prototype.backRight(context)];
  let randomIndex = Math.floor(Math.random() * moveArr.length);
  moveArr[randomIndex];
};

makeMichaelDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  makeMichaelDancer.prototype.moveRandomizer(this);
  // this.$node.toggle();
};

makeMichaelDancer.prototype.lineup = function (context) {
  if (this.$node.css("left") !== "90%") {
    var styleSettings = {
      left: '90%'
    };
    clearTimeout(this.timeout);
    setTimeout(()=>{ this.$node.css(styleSettings); }, this.timeBetweenSteps);
  } else {
    makeMichaelDancer.prototype.step();
  }

};

makeMichaelDancer.prototype.constructor = makeMichaelDancer;

//add methods that make michael rotate circularly, moonwalk, rotate around the room, grow, and shrink
//adv methods: say voicelines