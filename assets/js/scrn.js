'use strict';
$(document).ready(function(){

  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
  $('#intro').parallax("50%", -0.5);
  $('#parallax-1').parallax("50%", -0.5);
  $('#parallax-2').parallax("50%", -0.5);
  $('#parallax-3').parallax("50%", -0.5);
  $('#parallax-4').parallax("50%", -0.5);



  // vanillabox
  $('a.image').vanillabox();

  $('a.vimeo').vanillabox({
    type: 'iframe'
  });

  $('a.youtube').vanillabox({
    type: 'iframe'
  });

  $('a.website').vanillabox({
    type: 'iframe'
  });



  // smoothScroll
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });



  // matchHeight
  $('.match-height').matchHeight();

}); // end (document).ready(function()



// mixItUp
$('#work-container').mixItUp({
  controls: {
    activeClass: 'on'
  }
});



// fade out intro on scroll
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.intro-content').css({'opacity':(( 1000-scroll )/1000)});
});



// scrollReveal
//window.sr = new scrollReveal();



// sticky nav
$(".js_fixedcontent").fixedcontent({
  marginTop: 0,
  minWidth: 0,
  zIndex: 500
});



// close collapsed bootstrap nav
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});
