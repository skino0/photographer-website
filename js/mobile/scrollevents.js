//init controller

var controller = new ScrollMagic.controller({globalSceneOptions: {duration:100}});

//scenes

new ScrollMagic.Scene({triggerElement: "#mo-social-header"})
.setClassToggle("#mo-social-header","active")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#mo-sec"})
.setClassToggle("#high1","active")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#mo-sec"})
.setClassToggle("#high1","active")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#mo-sec"})
.setClassToggle("#high1","active")
.addIndicators()
.addTo(controller);