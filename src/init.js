$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      (($("body").height()-152) * Math.random())+32,
      ($("body").width()-90) * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    dancers.push(dancer);

    dancer.$node.on('mouseover', function(){
      dancer.$node.css({opacity: 0.4})
    });
    findClosest(dancer);

  });

  $(".lineUp").on("click", function(event){
    for (var i = 0; i < dancers.length; i++){
      dancers[i].lineUp();
    };
  });

  var findClosest = function(dancer){
    if(dancers.length < 10){
      return null;
    }
    var companion;
    var result = 10000;
    for (var i = 0; i < dancers.length - 1; i++){
      var pos1 = dancer.$node.position();
      var pos2 = dancers[i].$node.position();
      if(dancer.constructor === makeRocker){
        if(pos2.left > 150){
          var distance = Math.sqrt(Math.pow(pos2.top - pos1.top,2) + Math.pow(pos2.left - pos1.left,2));
          if(distance < result){
            result = distance;
            companion = dancers[i];
          }
        }
      } else if(dancer.constructor === makeBouncyDancer){
        if(pos2.top > 182){
          var distance = Math.sqrt(Math.pow(pos2.top - pos1.top,2) + Math.pow(pos2.left - pos1.left,2));
          if(distance < result){
            result = distance;
            companion = dancers[i];
          }
        }
      }
    }
    var goToPos = companion.$node.position();
    dancer.$node.animate(goToPos);
  };

});

