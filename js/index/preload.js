//vars
let progress = document.getElementById('progress');
let all = document.getElementById('all');
let slideshow_container = document.getElementById('slideshow-container');
let header1 = document.getElementById('header1');
let workheader = document.getElementById('workheader');
let header2 = document.getElementById('header2');
let navbar = document.getElementById('navbar');
let aboutme = document.getElementById('aboutme');
let work = document.getElementById('work');
let contact = document.getElementById('contact');
let mo_first = document.getElementById('mo-first');
let mo_boz1 = document.getElementById('mo-boz1');
let your = document.getElementById('your');
let dope = document.getElementById('dope');
let therapy = document.getElementById('therapy');
let mo_header2 = document.getElementById('mo-header2');
let tapfirst = document.getElementById('tapfirst');


var queue = new createjs.LoadQueue(false);

//progress - every time file load we have this progress event
queue.on("progress",event => {
    let progress = Math.floor(event.progress * 100);
    this.progress.style.width = progress +'%' ;
    if (progress == 100){
        console.log('all done');
        document.querySelector('body').style.backround = 'white';
    }
});

queue.on("complete",event => {
    //fadeout progress bar
    progress.classList.add('fadeOut');
    //all fadein
    all.classList.add('fadeIn');
    //container-one elements
    //general desktop
    slideshow_container.classList.add('start');
    header1.classList.add('headerstart');
    workheader.classList.add('workheaderstart');
    header2.classList.add('header2start');
    navbar.classList.add('navbarstart');
    aboutme.classList.add('navstart');
    work.classList.add('navstart');
    contact.classList.add('navstart');
    //mobile
    mo_first.classList.add('mo-firststart');
    mo_boz1.classList.add('moboz1start');
    your.classList.add('yourstart');
    dope.classList.add('dopestart');
    therapy.classList.add('therapystart');
    mo_header2.classList.add('moheader2start');
    tapfirst.classList.add('tapstart');

});

//queue load files
queue.on("fileload", handleFileComplete);
//work
/*
queue.loadFile('images/work/work-1.jpg');
queue.loadFile('images/work/work-3.jpg');
queue.loadFile('images/work/work-4.jpg');
queue.loadFile('images/work/work-5.jpg');
*/  

/*images/work/work-1.jpg*/
queue.loadFile({class:"workimage", src:"images/work/work-1.jpg"});
/*images/work/work-3.jpg*/
queue.loadFile({class:"workimage", src:"images/work/work-2.jpg"});
/*images/work/work-4.jpg*/
queue.loadFile({class:"workimage", src:"images/work/work-3.jpg"});
/*images/work/work-5.jpg*/
queue.loadFile({class:"workimage", src:"images/work/work-4.jpg"});

queue.loadFile({class:"workimage", src:"images/work/work-5.jpg"});
queue.loadFile({class:"workimage", src:"images/work/work-6.jpg"});
queue.loadFile({class:"workimage", src:"images/work/work-7.jpg"});
queue.loadFile({class:"workimage", src:"images/work/work-8.jpg"});


//slider
/*
queue.loadFile('images/pic1.jpg');
queue.loadFile('images/pic1.jpg');
queue.loadFile('images/pic3.jpg');*/

queue.loadFile({id:"pic1", src:"images/pic1.jpg"});
queue.loadFile({id:"pic2", src:"images/pic2.jpg"});
queue.loadFile({id:"pic3", src:"images/pic3.jpg"});
//boz
/*images/boz2.jpg*/
queue.loadFile({id:"boz", src:"images/boz2.jpg"});
//bozmobile

/*images/mo-boz.jpg*/
queue.loadFile({id:"mo-boz1", src:"images/mo-boz.jpg"});

//js files
queue.loadFile('js/jquery.js');
queue.loadFile('js/index/index.js');
queue.loadFile('js/index/slide.js');
queue.loadFile('js/index/nav.js');
queue.loadFile('js/index/top.js');
queue.loadFile('js/index/containers.js');
queue.loadFile('js/index/work-imgs.js');
queue.loadFile('js/mobile/tap.js');
queue.loadFile('js/index/social.js');

//css files
queue.loadFile('css/reset.css');
queue.loadFile('css/mobile-resets.css');
queue.loadFile('css/index/index.css');
queue.loadFile('css/index/slider.css');
queue.loadFile('css/index/nav.css');
queue.loadFile('css/index/container-one.css');
queue.loadFile('css/index/container-sec.css');
queue.loadFile('css/index/container-third.css');
queue.loadFile('css/index/container-fourth.css');
queue.loadFile('css/index/social.css');
queue.loadFile('css/index/top.css');
queue.loadFile('css/mobile/index.css');
queue.loadFile('css/mobile/mo-first.css');
queue.loadFile('css/mobile/mo-sec.css');

//function that pass event
function handleFileComplete(event) {
    var item = event.item;
    var type = item.type;
}