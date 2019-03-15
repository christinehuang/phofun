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
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '0px',
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 330,
          settings: {
            centerPadding: '0px',
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
 });

});

$(document).on('ready', function() {
        $(".map-slider").slick({
            dots: true,
            arrows: false,
            infinite: false,
            centerMode: true,
            centerPadding: '0px',
            variableWidth: false,
            speed: 800,
            slidesToShow: 1,

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
