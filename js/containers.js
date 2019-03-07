//scroll to about-me
$("#aboutme,#about").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-container").offset().top},
        'slow');
});

//scroll to work
$("#work,#wo").click(function() {
    $('html,body').animate({
        scrollTop: $("#container-third").offset().top},
        'slow');
});

$("#contact,#co").click(function() {
    $('html,body').animate({
        scrollTop: $("#container-fourth").offset().top},
        'slow');
});


/*experiment*/
/*
$(document).on('scroll', function(){
    if ($("#about-container").offset().top){
        console.log('aboutme');
    }else if ($("#container-third").offset().top){
        console.log('third container');

    } 
});*/