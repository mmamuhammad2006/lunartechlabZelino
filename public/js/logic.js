$(document).ready(function () {
    let width = $(window).width();
        if(width < 992){
            $(".navbar-cont").addClass("bg-blue position-fixed w-100 z-3");
            $(".navbar-cont").removeClass("bg-transparent");
        }else{
            $(".navbar-cont").removeClass("bg-blue position-fixed w-100 z-3");
            $(".navbar-cont").addClass("bg-transparent");
        }
    $(window).resize(function () { 
        console.log($(window).width());
        let width = $(window).width();
        if(width < 992){
            $(".navbar-cont").addClass("bg-blue position-fixed w-100 z-3");
            $(".navbar-cont").removeClass("bg-transparent");
        }else{
            $(".navbar-cont").removeClass("bg-blue position-fixed w-100 z-3");
            $(".navbar-cont").addClass("bg-transparent");
        }
    });
});