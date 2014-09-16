describe("rocker", function() {

  var rocker;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rocker = new makeRocker(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rocker.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(rocker.$node, 'animate');
    rocker.step();
    expect(rocker.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(rocker, "step");
      expect(rocker.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rocker.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rocker.step.callCount).to.be.equal(2);
    });
  });



});
