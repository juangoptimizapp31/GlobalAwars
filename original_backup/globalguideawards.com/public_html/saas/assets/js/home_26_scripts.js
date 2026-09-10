$( function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('.to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    /* ==  float_box_container button  == */
  $( ".float_box_container" ).mousemove(function(e) {
        var parentOffset = $(this).offset(); 
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(".float_box").css({"left": relX, "top": relY });
        $(".float_box").addClass("show");
    });
    $( ".float_box_container" ).mouseleave(function(e) {
        $(".float_box").removeClass("show");
    });

    /* ==  Button Animation  == */
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });
  
  $( ".button_su_inner" ).mouseleave(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });

  // -------- counter --------
  $('.counter').countUp({
        delay: 10,
        time: 2000
    });

    // --------- fav btn ---------
    $(".fav-btn").on("click" , function(){
        $(this).toggleClass("active");
    })

    
    // -------- parralax img mouse move -------
    $(function () {
        
        var b = document.getElementsByTagName("BODY")[0];  

        b.addEventListener("mousemove", function(event) {
        parallaxed(event);

        });

        function parallaxed(e) {
            var amountMovedX = (e.clientX * -0.3 / 10);
            var amountMovedY = (e.clientY * -0.3 / 10);
            var x = document.getElementsByClassName("parallaxed");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
            }
        }
    });

});

// ------------ working in desktop -----------
if ($(window).width() > 991) {
        $('.parallaxie').parallaxie({
    });
}

// ------------ swiper sliders -----------
$(document).ready(function() {    

    // testimonials-slider40
    var swiper = new Swiper('.tc-testimonials-slider41', {
        slidesPerView: 4,
        spaceBetween: 20,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-testimonials-style41 .swiper-next',
            prevEl: '.tc-testimonials-style41 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });
    

});


