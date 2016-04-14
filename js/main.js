$(document).ready( function() {

  $("#lemon").click( function() {
    $("#fruit").append("<img class='lemon' src='images/lemon.png' alt='lemonslice'/> ");
  });

  $("#fruit").on("click", ".lemon", function() {
    $(this).css('visibility', 'hidden');
  });

});
