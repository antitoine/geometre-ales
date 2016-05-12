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
    $('.dynamic-left').each(function() {
      var elt = $(this);
      elt.waypoint(function() {
        elt.addClass('animated fadeInLeft');
      }, {
        offset: '75%'
      });
    });
    $('.dynamic-right').each(function() {
      var elt = $(this);
      elt.waypoint(function() {
        elt.addClass('animated fadeInRight');
      }, {
        offset: '75%'
      });
    });
    $('.dynamic-bottom').each(function() {
      var elt = $(this);
      elt.waypoint(function() {
        elt.addClass('animated fadeInUp');
      }, {
        offset: '75%'
      });
    });
  });

  /******************** Tooltips ***********************/

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  /***************** Initiate Flexslider ******************/

  $('#presentation .presentation-flexslider').flexslider({
    animation: "slide",
    controlsContainer: $("#presentation .flexslider-navigation .controls-container"),
    customDirectionNav: $("#presentation .flexslider-navigation a")
  });

  $('#references .references-flexslider').flexslider({
    animation: "slide",
    controlsContainer: $("#references .flexslider-navigation .controls-container"),
    customDirectionNav: $("#references .flexslider-navigation a")
  });
});