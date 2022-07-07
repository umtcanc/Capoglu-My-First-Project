$('.js-open-menu').click(function (){
    $('.header-menu').toggleClass('active');
    $(this).toggleClass("active");
        $("body, html").toggleClass('scroll-disabled');
    if ($(window).width()<992){
        $("body, html").toggleClass('scroll-disabled');
    }
})

$('.js-open-sub-menu').click(function (){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $('.js-open-sub-menu').removeClass('active');
        $(this).addClass('active');
    }
})
$('.dropdown').click(function (){
    $(this).toggleClass('active')
})

