var Bouncer = function(top, left, timeBetweenSteps){
  top += 60;
  if(top > 302){
    top -= 210;
  }
  left += 45;
  if(left > 135){
    left -= 90;
  }

  Rocker.call(this, top, left, timeBetweenSteps);
  this.$node[0].className = "bouncy";
  this.moveDown = true;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

Bouncer.prototype = Object.create(Rocker.prototype);
Bouncer.prototype.constructor = Bouncer;

Bouncer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // if(this.moveDown){
  //   this.$node.animate({top: "-=150"});
  //   this.moveDown = false;
  // } else{
  //   this.$node.animate({top: "+=150"});
  //   this.moveDown = true;
  // }

  // this.$node.toggle();
};

Bouncer.prototype.lineUp = function(){
  var styleSettings = {
    left: 45
  };
  this.$node.css(styleSettings);
};

