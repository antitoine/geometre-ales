$(document).ready(function() {

  /***************** Header BG Scroll ******************/

  $('body > .content').waypoint(function(direction) {
    if (direction === 'up') {
      $('header .navbar')
        .removeClass('navbar-fixed-top')
        .addClass('navbar-dark')
        .addClass('bg-inverse')
        .removeClass('navbar-light')
        .removeClass('bg-faded');
      $('header .heading').css({
        "padding-top": "0"
      });
    } else if (direction === 'down') {
      $('header .navbar')
        .fadeOut(0)
        .addClass('navbar-fixed-top')
        .addClass('navbar-light')
        .addClass('bg-faded')
        .removeClass('navbar-dark')
        .removeClass('bg-inverse')
        .fadeIn(500);
      $('header .heading').css({
        "padding-top": "60px"
      });
    }
  });

  /***************** Smooth Scrolling ******************/

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /********** Dynamic elements apparitions *************/

  $('.dynamic-presentation').waypoint(function() {
    $('.dynamic-presentation').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.dynamic-activities').waypoint(function() {
    $('.dynamic-activities').addClass('animated fadeInRight');
  }, {
    offset: '75%'
  });
  $('.dynamic-references').waypoint(function() {
    $('.dynamic-references').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.dynamic-contact').waypoint(function() {
    $('.dynamic-contact').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });
});