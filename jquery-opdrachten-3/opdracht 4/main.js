// Write your solution here
$("#expand").click(function(){
  if ($(".rect").height() < 100){
    $(".rect").height("+=10") ;
  } else {
      $(".rect").height("10") ;
    }
});


$("#green").click(function(){
  $(".rect").css("background-color", "green");
});

$("#reset").click(function(){
  $(".rect").css("background-color", "transparent");
});

$("#hide").click(function(){
  $(".rect").hide()
});

$("#show").click(function(){
  $(".rect").show()
});
