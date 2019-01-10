// Write your solution here
function aap() {
  var x = $(this).css("background-color")
  $("#text").css("color", x)
}

$("#green").click(aap);

$("#red").click(aap);

$("#blue").click(aap);
