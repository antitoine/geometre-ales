$(document).ready(function() {

  /***************** Header BG Scroll ******************/

  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 460) {
        $('header .navbar')
          .addClass('navbar-fixed-top')
          .addClass('navbar-light')
          .addClass('bg-faded')
          .removeClass('navbar-dark')
          .removeClass('bg-inverse');
        $('header .heading').css({
          "padding-top": "60px"
        });
      } else {
        $('header .navbar')
          .removeClass('navbar-fixed-top')
          .addClass('navbar-dark')
          .addClass('bg-inverse')
          .removeClass('navbar-light')
          .removeClass('bg-faded');
        $('header .heading').css({
          "padding-top": "0"
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