function openNave() {
    document.getElementById("menu").style.left = "0";
}
function closeNave() {
    document.getElementById("menu").style.left = "-100%";
}
jQuery('#menu a').click(function(){
    jQuery('#menu').css("left", "-100%");
});
$('.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    }
});
jQuery(document).ready(function() {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 1;
    var navbarHeight = jQuery('header').outerHeight();
    jQuery(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = jQuery(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight) {
            jQuery('header').removeClass('fixa').addClass('normal');
        } else {
            if (st + jQuery(window).height() < jQuery(document).height()) {
                jQuery('header').removeClass('normal').addClass('fixa');
            }
        }
        var top_offset = jQuery(window).scrollTop();
        if (top_offset == 0) {
            jQuery('header').removeClass('fixa fade-in');
        } else {
            jQuery('header').addClass('menu-fixo');
        }
        lastScrollTop = st;
    }
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots: true,
    nav:true,
    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        },
        1420:{
            items:5
        }
    }
})