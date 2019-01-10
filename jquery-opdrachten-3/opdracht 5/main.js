// Write your solution here
$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('.square').stop().animate({
          left: '-=110px'
        }); //left arrow key
        break;
    case 38:
        $('.square').stop().animate({
            top: '-=110px'
        }); //up arrow key
        break;
    case 39:
        $('.square').stop().animate({
            left: '+=110px'
        }); //right arrow key
        break;
    case 40:
        $('.square').stop().animate({
            top: '+=110px'
        }); //bottom arrow key
        break;
    }
})
