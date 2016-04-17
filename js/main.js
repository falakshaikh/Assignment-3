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
    var lemon="rgba(255, 230, 153, 0.75)";
    var color = $("#juice").css("background-color")
    if (color == lemon){
       $("#juice").css("background-color", lemon );
    }
    else{
       $("#juice").css("background-color", lemon );
    }
  });

  $("#limeButton").click(function(){
    var lime="rgba(172, 222, 67, 0.73)";
    var color = $("#juice").css("background-color")
    if (color == lime){
       $("#juice").css("background-color", lime );
    }
    else{
       $("#juice").css("background-color", lime );
    }
  });

  $("#orangeButton").click(function(){
    var orange="rgba(251, 139, 58, 0.74)";
    var color = $("#juice").css("background-color")
    if (color == orange){
       $("#juice").css("background-color", orange );
    }
    else{
       $("#juice").css("background-color", orange );
    }
  });

  $("#pinkLemonButton").click(function(){
    var PinkLemon="rgba(251, 127, 168, 0.83)";
    var color = $("#juice").css("background-color")
    if (color == PinkLemon){
       $("#juice").css("background-color", PinkLemon );
    }
    else{
       $("#juice").css("background-color", PinkLemon );
    }
  });

});
