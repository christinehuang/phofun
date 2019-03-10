$(document).on('ready', function() {
 var $status = $('.counter');
 var $slickElement = $('.top-banner');

 $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
 });

 $slickElement.slick({
        dots: true,
        arrows: false,
        infinite: true,
        variableWidth: true,
        speed: 600,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4200, 
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: '0px',
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '0px',
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 330,
          settings: {
            centerPadding: '0px',
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
 });

});

$(document).on('ready', function() {
        $(".traffic-slide").slick({
            dots: false,
            prevArrow: '<div class="slide-arrow prev-arrow"><img src="images/slide-prev.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow"><img src="images/slide-next.svg" alt=""></div>',
            infinite: true,
            variableWidth: false,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
                        nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
