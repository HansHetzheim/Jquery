// Write your solution here

let game = ["paper", "rock", "scissor"]
let computer = game[Math.floor(Math.random()*game.length)];



$("#rock").click(function(){
  $(this).css("background-color", "yellow");
  $("#computer").text(computer);
  if(computer === "rock"){
    $("#score").text("TIE!")
  } else if(computer === "paper"){
    $("#score").text("YOU LOSE!")
  } else {
    $("#score").text("YOU WIN!")
  }

});

$("#paper").click(function(){
  $(this).css("background-color", "yellow");
  $("#computer").text(computer)
  if(computer === "paper"){
    $("#score").text("TIE!")
  } else if(computer === "scissor"){
    $("#score").text("YOU LOSE!")
  } else {
    $("#score").text("YOU WIN!")
  }

});

$("#scissor").click(function(){
  $(this).css("background-color", "yellow");
  $("#computer").text(computer)
  if(computer === "scissor"){
    $("#score").text("TIE!")
  } else if(computer === "rock"){
    $("#score").text("YOU LOSE!")
  } else {
    $("#score").text("YOU WIN!")
  }

});


$("#playagain").click(function(){
  location.reload(true);
});




















// $("#paper, #rock, #scissors").click(function(){
//   let userchoice=$(this).attr('id');
//   $(this).css("background-color", "yellow");
//   if (random < 0.34) {
//     random = "Rock";
//   } else if(random <= 0.67) {
//     random = "Paper";
//   } else {
//     random = "Scissors";
//   }
//   $("#computer").text(random);
//   $("#score").text(outcome);
// });
//
// let outcome = function(a,b){
//   if (random === userchoice){
//     return "TIE";
//   }
//   else if (random)
// }
//
// let random = Math.random();
//
// $("#playagain").click(function(){
//   location.reload(true);
// })
