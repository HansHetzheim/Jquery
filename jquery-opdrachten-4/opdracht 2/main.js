let salary;
let gender;
let children;



$(document).ready(function(){
  $(".calculate").click(function(){
    salary = $(".salary").val();
    $(".result").text(salary*(70+parseFloat(gender)+parseFloat(children))/100);
  });

  $(".gender").click(function(){
    gender = $(".gender").val();
  });
  $(".children").click(function(){
    children = $(".children").val();
  });
});
