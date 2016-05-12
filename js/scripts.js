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





  var mapDisplayed = false;
  $('.google-maps-container').waypoint(function(direction) {
    if (!mapDisplayed && direction === 'down') {
      mapDisplayed = true;
      $('.google-maps-container .google-maps').html('<iframe scrolling="no" marginheight="0" marginwidth="0" frameborder="0" height="300" width="600" src="http://maps.google.fr/maps?f=q&amp;source=s_q&amp;hl=fr&amp;geocode=&amp;q=Chabert+Patrick+G%C3%A9om%C3%A8tre&amp;aq=&amp;sll=46.75984,1.738281&amp;sspn=14.908361,33.815918&amp;vpsrc=6&amp;ie=UTF8&amp;hq=Chabert+Patrick+G%C3%A9om%C3%A8tre&amp;hnear=&amp;t=m&amp;cid=15468287871627251360&amp;ll=44.108758,4.081335&amp;spn=0.012326,0.0318&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>');
      $('.google-maps-container .loader-container').delay(3000).fadeOut(1000);
    }
  }, {
    offset: '75%'
  });

});