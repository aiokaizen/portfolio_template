//
//  Author: Mouad Kommir - Izyl
//  Website: mouadkommir.com
//

// This is a test code to scroll the whole page

// var lastScrollTop = 0;


// $(window).scroll(function (event) {
//     var scrollTop = $(this).scrollTop();
//     // if (scrollTop > (lastScrollTop + 20) || scrollTop < (lastScrollTop - 20)) {
//     if (scrollTop > lastScrollTop) {


//         $(window).scrollTop(lastScrollTop + $('section').height());
//         console.log($('section').height());

//     } else {
//         $(window).scrollTop(lastScrollTop - $('section').height());
//     }
//     lastScrollTop = scrollTop;
//     // }
//     // else {
//     //     $(windown).scrollTop(lastScrollTop);
//     // }
// });



$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('dark');
        $("nav.primary .logo").get(0).style.setProperty("font-size", "1.7em");
        $("html").get(0).style.setProperty("--nav-height", "50px");
        $("#login").removeClass('out');
    }
    else {
        $('nav').removeClass('dark');
        $("html").get(0).style.setProperty("--nav-height", "70px");
        $("nav.primary .logo").get(0).style.setProperty("font-size", "2.3em");
        $("#login").addClass('out');
    }

})