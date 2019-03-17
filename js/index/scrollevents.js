$(document).ready(function(){
/*scroll magic , turn to aos*/
var controller = new ScrollMagic.Controller();
    var aboutscene = new ScrollMagic.Scene({
        triggerElement: '#about-container',
    })
    .setClassToggle('#about-container','activeabout')
    .setClassToggle('#story-about','test')
    .setClassToggle('#boz','test')

    .addTo(controller);
    var bozscene = new ScrollMagic.Scene({
        triggerElement: '#boz'
    })
    .setClassToggle('#boz','bozactive')
    .addTo(controller);
});


    //indicators to debug more complicated scenes
    /*.addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        indent:200,
        colorStart: '#75C695'
    })*/


