$(document).ready(function() {

  var fixedNavBarOffset = 60;

  /***************** Header BG Scroll ******************/

  $(function () {
    $('body > .content').waypoint(function(direction) {
      if (direction === 'up') {
        $('header .navbar')
          .removeClass('navbar-fixed-top')
          .addClass('navbar-dark')
          .addClass('bg-inverse')
          .removeClass('navbar-light')
          .removeClass('bg-faded');
      } else if (direction === 'down') {
        $('header .navbar')
          .fadeOut(0)
          .addClass('navbar-fixed-top')
          .addClass('navbar-light')
          .addClass('bg-faded')
          .removeClass('navbar-dark')
          .removeClass('bg-inverse')
          .fadeIn(500);
      }
    }, {
      offset: 200
    });
  });

  /***************** Smooth Scrolling ******************/

  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - fixedNavBarOffset
          }, 1000);
          return false;
        }
      }
    });
  });

  /*************** Nav bar active item *****************/

  $(function () {
    var activeItemOffset = fixedNavBarOffset + 10;
    $('#presentation').waypoint(function(direction) {
      if (direction === 'down') {
        $('header .navbar li.presentation').addClass('active');
      } else if (direction === 'up') {
        $('header .navbar li.presentation').removeClass('active');
      }
    }, {
      offset: activeItemOffset
    });
    $('#activities').waypoint(function(direction) {
      if (direction === 'down') {
        $('header .navbar li.presentation').removeClass('active');
        $('header .navbar li.activities').addClass('active');
      } else if (direction === 'up') {
        $('header .navbar li.activities').removeClass('active');
        $('header .navbar li.presentation').addClass('active');
      }
    }, {
      offset: activeItemOffset
    });
    $('#references').waypoint(function(direction) {
      if (direction === 'down') {
        $('header .navbar li.activities').removeClass('active');
        $('header .navbar li.references').addClass('active');
      } else if (direction === 'up') {
        $('header .navbar li.references').removeClass('active');
        $('header .navbar li.activities').addClass('active');
      }
    }, {
      offset: activeItemOffset
    });
    $('#contact').waypoint(function(direction) {
      if (direction === 'down') {
        $('header .navbar li.references').removeClass('active');
        $('header .navbar li.contact').addClass('active');
      } else if (direction === 'up') {
        $('header .navbar li.contact').removeClass('active');
        $('header .navbar li.references').addClass('active');
      }
    }, {
      offset: activeItemOffset
    });
  });

  /********** Dynamic elements apparitions *************/

  $(function () {
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

  /******************** Tooltips ***********************/

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
});