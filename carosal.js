$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["<span class='arrow'><i class='fa-solid fa-circle-chevron-left'></i><span>","<span class='arrow'><i class='fa-solid fa-circle-chevron-right'></i><span>"],
    responsive:{
        0:{
            items:3,
            nav:false,
        },
        600:{
            items:5
        },
        1000:{
            items:6
        }
    }
})