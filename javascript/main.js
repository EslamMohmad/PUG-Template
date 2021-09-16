//switch between sections
$(".point-container ul li").on("click", function () {
    let sectionPostion = $("." + $(this).data("section")).offset().top;
    $("html, body").animate({
        scrollTop:sectionPostion
    },"slow")
})

$(window).on("scroll", function () {
    $(".parent-container .parent").each(function () {
        if ($(window).scrollTop() > $(this).offset().top - 50) {
            let item = $(this).attr("id");
            let ele = $(".point-container li[data-section=" + item +"]")
            ele.addClass("active").siblings().removeClass("active")
            
            if ($(this).hasClass("txt-black")) {
                $(".body-container").removeClass("txt-white")
            } else {
                $(".body-container").addClass("txt-white")
            }
        }
    })
})

//import data file
import myData from "./data/data.js";

//import sliders files
import "./sliders.js";

//menu-bar
$(".menu-bar").on("click", function () {
    $(this).toggleClass("active")
    $(".menu-section").toggleClass("active")
})