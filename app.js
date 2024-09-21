$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(`.navbar`).addClass("sticky");
        }else{
            $(`.navbar`).removeClass("sticky");
        }
        if($(window).scrollTop() > 500){
            $(`.scroll-up-btn`).addClass("show");
        }else{
            $(`.scroll-up-btn`).removeClass("show");
        }
    });

    // slide-up script
    $(`.scroll-up-btn`).click(function(){
        $(`html`).animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $(`.menu-btn`).click(function(){
        $(`.navbar .menu`).toggleClass("active");
        $(`.menu-btn i`).toggleClass("active");
    })
});

// typing animation script
var typed = new Typed(".typing",{
    strings:["Web Developer","C++ Developer","Data Analyst"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2",{
    strings:["Web Developer","C++ Developer","Data Analyst"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});