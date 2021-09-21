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