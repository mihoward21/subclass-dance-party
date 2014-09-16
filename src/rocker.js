var makeRocker = function(top, left, timeBetweenSteps){
  if(left > 150){
    left -= 150;
  }
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node[0].className = "rocker";
  this.moveRight = true;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeRocker.prototype = Object.create(Dancer.prototype);
makeRocker.prototype.constructor = makeRocker;

makeRocker.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
 if(this.moveRight){
    this.$node.animate({left: "-=150"});
    this.moveRight = false;
  } else{
    this.$node.animate({left: "+=150"});
    this.moveRight = true;
  }
};

