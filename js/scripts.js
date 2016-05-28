(function($){

  /****************** HISRC Speed Test ******************/
  $.hisrc.speedTest();

  $(document).ready(function() {

    var fixedNavBarOffset = 60;
    var marginNavBar = 20;

    /***************** HISRC Activation ******************/
    $('img.hisrc').hisrc();

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
          $('.google-maps-container .google-maps').html('<iframe style="pointer-events: none;" marginheight="0" marginwidth="0" frameborder="0" height="300" width="600" src="http://maps.google.fr/maps?f=q&amp;source=s_q&amp;hl=fr&amp;geocode=&amp;q=Chabert+Patrick+G%C3%A9om%C3%A8tre&amp;aq=&amp;sll=46.75984,1.738281&amp;sspn=14.908361,33.815918&amp;vpsrc=6&amp;ie=UTF8&amp;hq=Chabert+Patrick+G%C3%A9om%C3%A8tre&amp;hnear=&amp;t=m&amp;cid=15468287871627251360&amp;ll=44.108758,4.081335&amp;spn=0.012326,0.0318&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>');
          $('.google-maps-container .loader-container').delay(4000).fadeOut(1000);

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
      $(window).on('resize', function () {
        screenHeight = $(window).height();
      }).mousemove(function (e) {
        var y = ((((e.pageY * 100) / screenHeight) - 50) / 15) + 50;
        $('.mouse-bg-move').each(function () {
          $(this).css('background-position', '50% ' + y + '%');
        });
      });
    });
  });

})(jQuery);