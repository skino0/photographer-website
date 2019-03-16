//On page refresh top
/*
$(document).ready(function(){
    $(this).scrollTop(0);
});*/

//Go to top 
$("#gotop").click(function() {
    $('html,body').animate({
        scrollTop: $("#slide-container").offset().top},
        'slow');
});

//go to top visible

$(document).on('scroll', function(){
    if ($(window).scrollTop() > 100){
        $("#gotop").addClass('visibletop');

    } else {
        $("#gotop").removeClass('visibletop');
    }
 });