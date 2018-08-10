$(document).ready(function () {

    $(".filter-a").click(function () {
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
    if ($(".filter-a").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

    $(".gallery-product").click(function () {
        $(this).children('.modal-work').toggle('modal-show');
    });
});


$(document).ready(function () {
    $('#sidebar-collapse').on('click', function () {
        $(this).toggleClass('show-burger');
        $('#sidebar').toggleClass('sidebar-show');

    });
});


// Basic initialization is like this:
// $('.your-class').slick();

// I added some other properties to customize my slider
// Play around with the numbers and stuff to see
// how it works.
// $('.slick-carousel').slick({
//     infinite: true,
//     slidesToShow: 6, // Shows a three slides at a time
//     slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
//     arrows: true, // Adds arrows to sides of slider
//     dots: true // Adds the dots on the bottom
// });

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