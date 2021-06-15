$(function(){
    /* slide gnb 나타나기*/
    $(".menu").click(function(){
        $('.slide_menu').addClass('on')
    });
    $(".close").click(function(){
        $('.slide_menu').removeClass('on')
    });
});