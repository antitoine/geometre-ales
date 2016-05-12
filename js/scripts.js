$(document).ready(function() {

  /***************** Header BG Scroll ******************/

  $(function() {
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
  });
  
  /***************** Smooth Scrolling ******************/

  $(function() {

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

  });

});