jQuery(function($) { 

  // settings
  var $slider = $('.index-slider'); // class or id of carousel slider
  var $slide = 'li'; // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 4000; // 4 seconds

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );

});

jQuery(function($) { 

  // settings
  var $slider2 = $('.index-slider2'); // class or id of carousel slider
  var $slide2 = 'li'; // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 4000; // 4 seconds

  function slides(){
    return $slider2.find($slide2);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider2.find($slide2 + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );

});

$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  //build a scene
  

  var ourScene13 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#content3-more-b', 'dis') //add class to section1-pic
  .addIndicators({
    name: 'disnone',
    colorTrigger: '#c90',
    colorStart: '#F60',
  })//this is requires a plugin
  .addTo(controller);

  var ourScene14 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#content3-more-w', 'show') //add class to section1-pic
  .addIndicators({
    name: 'disshow',
    colorTrigger: '#c90',
    colorStart: '#F60',
  })//this is requires a plugin
  .addTo(controller);

    var ourScene5 = new ScrollMagic.Scene({
      triggerElement: '#section3-pic',
      triggerHook: 0.6,
      reverse: true
  })
  .setClassToggle('#section3-pic', 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'pic3 fade5',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  var ourScene6 = new ScrollMagic.Scene({
      triggerElement: '#section3-txt',
      triggerHook: 0.4,
      reverse: true
  })
  .setClassToggle('#section3-txt', 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'txt2 fade5',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);


  $('.news-info').each(function(){

    //build a scene
  var ourScene19 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle(this, 'white') //add class to section1-pic
  .addIndicators({
    name: 'newsinfo',
    colorTrigger: '#F90',
    colorStart: '#F60',
    indent: 150
  })//this is requires a plugin
  .addTo(controller);
  });

  $('.about-top').each(function(){

    //build a scene
  var ourScene20 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.9,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'abouttxtpic',
    colorTrigger: '#F90',
    colorStart: '#F60',
    indent: 150
  })//this is requires a plugin
  .addTo(controller);
  });

  $('.backtotop').each(function(){

    //build a scene
  var ourScene22 = new ScrollMagic.Scene({
      triggerElement: '#secrets',
      triggerHook: 0.4,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'backtotop',
    colorTrigger: '#F90',
    colorStart: '#F60',
    indent: 150
  })//this is requires a plugin
  .addTo(controller);
  });

  $('.one').each(function(){

    //build a scene
  var ourScene23 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'backtotop',
    colorTrigger: '#F90',
    colorStart: '#F60',
    indent: 150
  })//this is requires a plugin
  .addTo(controller);
  });

   $('.menu-combo').each(function(){

    //build a scene
  var ourScene24 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'backtotop',
    colorTrigger: '#F90',
    colorStart: '#F60',
    indent: 150
  })//this is requires a plugin
  .addTo(controller);
  });

    $('.appet-list').each(function(){

    //build a scene
  var ourScene25 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'backtotop',
    colorTrigger: '#F90',
    colorStart: '#F60',
    indent: 150
  })//this is requires a plugin
  .addTo(controller);
  });

   var parallaxScene = new ScrollMagic.Scene({
       triggerElement:'.about',
       triggerHook:1,
       duration:'150%'
   })
   .setTween(TweenMax.from('.dot-bg', 1, {y: '-55%', ease:Power0.easeNone}))
   .addTo(controller);


  });



 (function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion > li:eq(1) a').addClass('active').next().slideDown();
    $('.accordion > li:eq(2) a').addClass('active').next().slideDown();
    $('.accordion > li:eq(3) a').addClass('active').next().slideDown();
    $('.accordion > li:eq(4) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('.acc-list').find('.acc-content');

        $(this).closest('.accordion').find('.acc-content').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

 (function($) {


    $('.accordion2 a').click(function(k) {
        var dropDown2 = $(this).closest('.acc-list').find('.acc-content2');

        $(this).closest('.accordion2').find('.acc-content2').not(dropDown2).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion2').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown2.stop(false, true).slideToggle();

        k.preventDefault();
    });
})(jQuery);



$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() >= 830) {
            // if larger or equal
            $('.acc-content').show();
        } else {
            // if smaller
            $('.acc-content').hide();
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});


