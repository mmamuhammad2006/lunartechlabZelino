$(document).ready(function () {
    let width = $(window).width();
        if(width < 992){
            $(".navbar-cont").addClass("bg-blue position-fixed w-100 z-3 overflow-y-auto");
            $(".navbar-cont").removeClass("bg-transparent");
            $("#a-tag").on('click',function () { 
                try{
                    $("#a-tag").next().toggleClass('jq-dropdown mt-3');
                }catch(err){
                    console.log("Connot add drowpdown class getting:- "+err);
                }
            });
        }else{
            $(".navbar-cont").removeClass("bg-blue position-fixed w-100 z-3 overflow-y-auto");
            $(".navbar-cont").addClass("bg-transparent");
        }
    $(window).resize(function () { 
        let width = $(window).width();
        if(width < 992){
            $(".navbar-cont").addClass("bg-blue position-fixed w-100 z-3 overflow-y-auto");
            $(".navbar-cont").removeClass("bg-transparent");
            $("#a-tag").on('click',function () { 
                try{
                    $("#a-tag").next().toggleClass('jq-dropdown mt-3');
                }catch(err){
                    console.log("Connot add drowpdown class getting:- "+err);
                }
            });
        }else{
            $(".navbar-cont").removeClass("bg-blue position-fixed w-100 z-3 overflow-y-auto");
            $(".navbar-cont").addClass("bg-transparent");
        }
    });
});