(function($){

  $(document).ready(function() {

    var fixedNavBarOffset = 60;
    var marginNavBar = 20;

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
      $('a[href*="#"]:not([href="#"], [href*="#carousel-"], [href*="#tab-"], [href*="#modal-"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - fixedNavBarOffset - marginNavBar
            }, 1000);
            return false;
          }
        }
      });
    });

    /*************** Nav bar active item *****************/

    $(function () {
      var activeItemOffset = fixedNavBarOffset + 10 + marginNavBar;
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
      $('.dynamic-up').each(function() {
        var elt = $(this);
        elt.waypoint(function() {
          elt.addClass('animated fadeInUp');
        }, {
          offset: '75%'
        });
      });
      $('.dynamic-down').each(function() {
        var elt = $(this);
        elt.waypoint(function() {
          elt.addClass('animated fadeInDown');
        }, {
          offset: '75%'
        });
      });
      $('.dynamic-up').each(function() {
        var elt = $(this);
        elt.waypoint(function() {
          elt.addClass('animated fadeInUp');
        }, {
          offset: '75%'
        });
      });
      $('.dynamic-down').each(function() {
        var elt = $(this);
        elt.waypoint(function() {
          elt.addClass('animated fadeInDown');
        }, {
          offset: '75%'
        });
      });
      $('.dynamic-bounce').each(function() {
        var elt = $(this);
        elt.waypoint(function() {
          elt.addClass('animated bounceIn');
        }, {
          offset: '75%'
        });
      });
    });

    /******************** Tooltips ***********************/

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    /************* Google Maps Load & utils **************/

    $(function () {
      var mapDisplayed = false;
      $('.google-maps-container').waypoint(function(direction) {
        if (!mapDisplayed && direction === 'down') {
          mapDisplayed = true;
          $('.google-maps-container .loader-container').fadeOut(2000);

          // Disable scroll zooming and bind back the click event
          var onMapMouseleaveHandler = function (event) {
            var that = $(this);
            that.on('click', onMapClickHandler);
            that.off('mouseleave', onMapMouseleaveHandler);
            that.find('iframe').css("pointer-events", "none");
          };
          var onMapClickHandler = function (event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
          };
          // Enable map zooming with mouse scroll when the user clicks the map
          $('.google-maps-container .google-maps').on('click', onMapClickHandler);
        }
      }, {
        offset: '75%'
      });
    });

    /******************* Lexicon link ********************/

    $(function () {
      $('a[href*="#modal-lexicon-"]').click(function () {
        var href = $(this).attr('href');
        $('#modal-lexicon').modal('toggle').on('shown.bs.modal', function (e) {
          window.setTimeout(function () {
            window.location = href;
          }, 100);
        });
        return false;
      });
    });

    /****************** Background move ******************/

    $(function () {
      var screenHeight = $(window).height();
      $(window).resize(function () {
        screenHeight = $(this).height();
      }).scroll(function() {
        var screenPercentageMove = (($(this).scrollTop() * 100) / screenHeight);
        $('.scroll-bg-effect').each(function() {
          var elt = $(this);
          var imageSizePercentage = ((elt.height() * 100) / screenHeight);
          var y = (((imageSizePercentage / 100) * screenPercentageMove) / 2) + 50;
          elt.css('background-position', '50% ' + y + '%');
        });
      });
    });

  });

})(jQuery);
