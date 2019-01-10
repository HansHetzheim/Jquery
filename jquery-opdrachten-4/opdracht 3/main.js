let emailCheck = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
let nameCheck = /\w[A-Za-z0-9-]/;
let numberCheck = /\w[0-9]/;
let email;
let firstName;
let lastName;
let phoneNumber;

$(".email").keyup(function(){
  email = $(".email").val();
  console.log(emailCheck.test(email));
  if (emailCheck.test(email) === true) {
    $(".email").css("border", "2px solid green")
  } else {
    $(".email").css("border", "2px solid red")
  }
  });

  $(".firstname").keyup(function(){
    firstName = $(".firstname").val();
    console.log(nameCheck.test(firstName));
    if (nameCheck.test(firstName) === true) {
      $(".firstname").css("border", "2px solid green")
    } else {
      $(".firstname").css("border", "2px solid red")
    }
    });

    $(".lastname").keyup(function(){
      firstName = $(".lastname").val();
      console.log(nameCheck.test(lastName));
      if (nameCheck.test(lastName) === true) {
        $(".lastname").css("border", "2px solid green")
      } else {
        $(".lastname").css("border", "2px solid red")
      }
      });

      $(".number").keyup(function(){
        phoneNumber = $(".number").val();
        console.log(numberCheck.test(phoneNumber));
        if (numberCheck.test(phoneNumber) === true) {
          $(".number").css("border", "2px solid green")
        } else {
          $(".number").css("border", "2px solid red")
        }
        });
