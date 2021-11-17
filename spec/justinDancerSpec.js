describe('justinDancer', function() {

  var justinDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    justinDancer = new makeJustinDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(justinDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(justinDancer.$node, 'toggle');
    justinDancer.step();
    expect(justinDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {

    it('a rotate class should be toggled onto justinDancer when moused over', function() {
      sinon.spy(justinDancer.$node, 'toggleClass');
      justinDancer.$node.trigger('mouseover');
      expect(justinDancer.$node.toggleClass.called).to.be.true;
    });

    it('should call step at least once per second', function() {
      sinon.spy(justinDancer, 'step');
      expect(justinDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(justinDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(justinDancer.step.callCount).to.be.equal(2);
    });


  });
});
