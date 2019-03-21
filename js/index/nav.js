//On Click change styles
$(".navitem").click(function(){
    $("#aboutme").attr('id','about').attr('class','active');
    $("#work").attr('id','wo').attr('class','active');
    $("#contact").attr('id','co').attr('class','active');


});

//Add classes when visitor scroll some pixels down
$(document).on('scroll', function(){
    if ($(window).scrollTop() > 100){
        $("#aboutme").attr('id','about').attr('class','active');
        $("#work").attr('id','wo').attr('class','active');
        $("#contact").attr('id','co').attr('class','active');
    }else {
        //nothing
    }
 });


