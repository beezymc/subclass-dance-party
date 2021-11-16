$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    // var heightRandomizer = function() {
    //   let testHeight = $("body").height() * Math.random();
    //   while (testHeight < 32 || testHeight > $("body").height - 50) {
    //     testHeight = $("body").height() * Math.random();
    //   }
    //   return testHeight;
    // };
    // console.log(heightRandomizer(), $("body").height());
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });
  $('.addLineupButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineup();
    }
  });
  $('.addResumeDanceButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].step();
    }
  });
  const brittBounce = function (dancers) {
    const brittanys = [];
    const others = [];
    for (let i = 0; i < dancers.length; i++) {
      if (dancers[i] instanceof makeBrittanyDancer) {
        brittanys.push(dancers[i]);
      } else {
        others.push(dancers[i]);
      }
    }
    for (let i = 0; i < brittanys.length; i++) {
      let currBritt = brittanys[i];
      let brittCoords = currBritt.$node.offset();
      for (let j = 0; j < others.length; j++) {
        let currOther = others[j];
        let otherCoords = currOther.$node.offset();
        if (100 > Math.abs(brittCoords.top - otherCoords.top) && 100 > Math.abs(brittCoords.left - otherCoords.left)) {
          console.log("trigger");
          currBritt.bounceInRandomDirection();
        }
      }
    }
  };

  setInterval(function () {
    brittBounce(window.dancers);
  }, 100);
});

