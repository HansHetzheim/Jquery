// Write your solution here
var count = 0;
$("#more").click(function() {
    count++;
    $("#counter").text("My current count is: "+count);
});

$("#less").click(function() {
    count--;
    $("#counter").text("My current count is: "+count);
});
