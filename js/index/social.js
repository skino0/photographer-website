$('#whatsapp').hover(function(){
    $("#tel").addClass('enable');
});

$('#whatsapp').mouseout(function(){
    $("#tel").removeClass('enable');
});