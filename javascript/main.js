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

//use slider effect (works section)
$(".parent .slider").slick({
    infinite:true,
    slidesToShow:1,
    nextArrow:`<i class="slick-arrow slick-next fas fa-chevron-right"></i>`,
    prevArrow:`<i class="slick-arrow slick-prev fas fa-chevron-left"></i>`
})

//use slider effect (reviews section)
$(".reviews.parent .slide").slick({
    arrows:false,
    slidesToShow:2,
    infinite:false,
    slideToScroll:1,
    dots:true,
    responsive: [
        {
            breakpoint:768,
            settings: {
                slidesToShow:1
            }
        }
    ]
})

//menu-bar
$(".menu-bar").on("click", function () {
    $(this).toggleClass("active")
    $(".menu-section").toggleClass("active")
})