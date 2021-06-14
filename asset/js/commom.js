$(function(){
    /* slide gnb 나타나기*/
    $(".menu").click(function(){
        $('.slide_menu').addClass('on')
    });
    $(".close").click(function(){
        $('.slide_menu').removeClass('on')
    });

    $(window).load(function(){
        $(".comtent_inner .text_box").addClass("active");
        $(".comtent_inner .main_img").addClass("active");
    })
})