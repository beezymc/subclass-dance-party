describe('michaelDancer', function() {

  var michaelDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    michaelDancer = new makeMichaelDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(michaelDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(michaelDancer.$node, 'toggle');
    michaelDancer.step();
    expect(michaelDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(michaelDancer, 'step');
      expect(michaelDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(michaelDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(michaelDancer.step.callCount).to.be.equal(2);
    });
  });
});
