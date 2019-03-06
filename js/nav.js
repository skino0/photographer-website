//On Click change styles
$(".navitem").click(function(){
    $(".navitem:first-child").attr('class','navitem active1');
    $(".navitem:nth-child(2)").attr('class','navitem active2');
    $(".navitem:nth-child(3)").attr('class','navitem active3');
    
    $(".navitem").addClass('navactive');

});