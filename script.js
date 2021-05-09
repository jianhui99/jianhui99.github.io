$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }

        if(this.scrollY > 800){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // slide-up script 
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop:0});
    });

    // typing animation script 
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Developer", "Backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing2", {
        strings: ["Software Engineer", "Developer", "Backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
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

    $('.menu li a').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
        $('.menu-btn #burger').css("display", "block");
        $('.menu-btn #close').css("display", "none");
    });
});