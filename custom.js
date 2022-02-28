$(function(){
    
    new fullpage('#fullpage', {
        scrollBar: true,

        responsiveWidth: 900
    });
    // slogan 영역
    $('.slideshow').slick({
        infinite: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        pauseOnHover: false
    });
    // typeit 영역
    $('#typing').typeIt({
        strings: ["공간", "네트워크", "아름다움", "행복"],
        speed: 550,
        autoStart: true,
        breakLines: false,
    });
})
$(function(){
    
    $('.hamburger').click(function(){
        $(this).toggleClass("on");
        $(this).toggleClass('active')
        $('.gnb').toggleClass('active, on')
        $('.person_mo').toggleClass('active, on')
    })
});


// 메뉴호버
$(function(){
    $('.gnb>ul>li').mouseenter(function(){
        $('.dep2>li, .gnb_bg, .dep2_bg').show()
    })
    $('.gnb>ul>li').mouseleave(function(){
        $('.dep2>li, .gnb_bg, .dep2_bg').hide()
    })
})

