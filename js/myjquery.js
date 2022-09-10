$(document).ready(function(){
$('.back-to-top').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 400);
   return false;
 }); 

$(window).scroll(function () {
    let height = $('body').height();
    scrollTop = $(window).scrollTop();
    if(scrollTop > 100)
    {
        $('.back-to-top').css({ 'position': 'fixed', 'bottom' : '50px' , 'display' : 'block'});
    }
    else
    {
        $('.back-to-top').css({ 'position': 'absolute', 'bottom': '-50px' , 'display' : 'none'});
    }
});
});