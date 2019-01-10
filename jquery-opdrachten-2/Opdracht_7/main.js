$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("ol li:first-child").click(function(){
      $(this).css("font-size", "120%")
    })

    /* On click: Decrease the font size (80%) */
    $("ol li:nth-child(2)").click(function(){
      $(this).css("font-size", "80%")
    })

    /* On click: Bold or normalize the green words */
    $("ol li:nth-child(3)").click(function(){
      $(".green").css("font-weight", "bold")
    })

    /* On click: Bold or normalize the green words */
    // $("ol li:nth-child(3)").click(function(){
    //   $(".green").css("font-weight", "normal")
    // })

    /* On click: Replace the logo with another image */
      $('img').click(function(){
        $("img").attr('src',"images/koala.jpg");
        return false;
      });

    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $('a').hover(function(){
      $(this).parent().children('a').toggle();
}
    });

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */

});
