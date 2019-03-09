$(".workimage").click(function(){
    //Transfer src script between img's to main img container
    var imgsrc=$(this).attr('src');    
    $("#bgimg").attr('src',imgsrc);
    //imgs container vanish & image visible
    $("#activeimage").addClass('visible');
    $("#work-imgs").addClass('vanish');

});

//x click function actions
$("#x").click(function(){
    //visible vanish reverse
    $("#activeimage").removeClass('visible');
    $("#work-imgs").removeClass('vanish');
});


