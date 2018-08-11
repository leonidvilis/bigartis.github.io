// Filter
$(document).ready(function () {

    $(".filters .half-btn").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });
    if ($(".filter .half-btn").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

    $(".gallery-product").click(function () {
        $(this).children('.modal-work').toggle('modal-show');
    });
});


//Slick slider
$('.slick-carousel').slick({
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            // centerMode: true,

        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            dots: true,
            infinite: true,

        }


    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            infinite: true,

        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
        }
    }]
});


// скрываем меню
$('#sidebar-show').click(function (e) {
    e.preventDefault();
    $(this).closest('#sidebar').toggleClass('sidebar-show');
    $(this).toggleClass('open');
});
$(".half-btn").click(function (e) {
    $(this).closest("#sidebar").removeClass("slider-show");
});
$(document).mouseup(function (e) {
    var container = $('#sidebar');
    if (container.find('.half-btn').has(e.target).length === 0 &&
        $(e.target).closest('#sidebar').length === 0) {
        if(container.hasClass("sidebar-show")){
            container.removeClass('sidebar-show');
            $('#sidebar-show').toggleClass('open');
        }
    }
});