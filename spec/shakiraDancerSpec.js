describe('shakiraDancer', function() {

  var shakiraDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shakiraDancer = new makeShakiraDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shakiraDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a ', function() {
  //   expect(shakiraDancer.$node.walk).to.include(css);
  // })

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(shakiraDancer.$node, 'toggle');
  //   shakiraDancer.step();
  //   expect(shakiraDancer.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shakiraDancer, 'step');
      expect(shakiraDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shakiraDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shakiraDancer.step.callCount).to.be.equal(2);
    });
  });
});
