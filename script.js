$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    });
    // toggle menu/navbar script
    $('.menu-btn #burger').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
        $('.menu-btn #burger').css("display", "none");
        $('.menu-btn #close').css("display", "block");
    }); 

    $('.menu-btn #close').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
        $('.menu-btn #burger').css("display", "block");
        $('.menu-btn #close').css("display", "none");
    }); 
});