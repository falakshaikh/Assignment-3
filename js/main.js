$(document).ready( function() {

  $("#lemonButton").click( function() {
    $("#fruit").append("<img class='lemon' src='images/lemon.png' alt='Lemon Slice'/> ");
  });

  $("#limeButton").click( function() {
    $("#fruit").append("<img class='lime' src='images/lime.png' alt='Lime Slice'/> ");
  });

  $("#orangeButton").click( function() {
    $("#fruit").append("<img class='orange' src='images/orange.png' alt='Orange Slice'/> ");
  });

  $("#pinkLemonButton").click( function() {
    $("#fruit").append("<img class='pinkLemon' src='images/pinkLemon.png' alt='Pink Lemon Slice'/> ");
  });

  $("#fruit").on("click", ".lemon", function() {
    $(this).css('visibility', 'hidden');
  });

  $("#fruit").on("click", ".lime", function() {
    $(this).css('visibility', 'hidden');
  });

  $("#fruit").on("click", ".orange", function() {
    $(this).css('visibility', 'hidden');
  });

  $("#fruit").on("click", ".pinkLemon", function() {
    $(this).css('visibility', 'hidden');
  });

});

$(document).ready(function(){
  $("#lemonButton").click(function(){
    var pink="rgb(255, 179, 215)";
    var color = $("body").css("background-color")
    if (color == pink){
       $("body").css("background-color", pink );
    }

  });
    $("#limeButton").click(function(){
      var lime="#e6ccff";
      var pink="rgb(255, 179, 215)";
      var color = $("body").css("background-color")
      if (color == pink){
         $("body").css("background-color", lime );
      }

    });
    $("#orangeButton").click(function(){
      var orange="#99ddff";
      var pink="rgb(255, 179, 215)";
      var color = $("body").css("background-color")
      if (color == pink){
         $("body").css("background-color", orange );
      }

    });
    $("#pinkLemonButton").click(function(){
      var PinkLemon="#ffe699";
      var pink="rgb(255, 179, 215)";
      var color = $("body").css("background-color")
      if (color == pink){
         $("body").css("background-color", PinkLemon );
      }

    });
});
