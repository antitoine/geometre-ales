"use strict";!function(a){a(document).ready(function(){a(function(){a("body > .content").waypoint(function(e){"up"===e?a("header .navbar").removeClass("navbar-fixed-top").addClass("navbar-dark").addClass("bg-inverse").removeClass("navbar-light").removeClass("bg-faded"):"down"===e&&a("header .navbar").fadeOut(0).addClass("navbar-fixed-top").addClass("navbar-light").addClass("bg-faded").removeClass("navbar-dark").removeClass("bg-inverse").fadeIn(500)},{offset:200})}),a(function(){a('a[href*="#"]:not([href="#"], [href*="#carousel-"], [href*="#tab-"], [href*="#modal-"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=a(this.hash);if(e=e.length?e:a("[name="+this.hash.slice(1)+"]"),e.length)return a("html,body").animate({scrollTop:e.offset().top-60-20},1e3),!1}})}),a(function(){a("#presentation").waypoint(function(e){"down"===e?a("header .navbar li.presentation").addClass("active"):"up"===e&&a("header .navbar li.presentation").removeClass("active")},{offset:90}),a("#activities").waypoint(function(e){"down"===e?(a("header .navbar li.presentation").removeClass("active"),a("header .navbar li.activities").addClass("active")):"up"===e&&(a("header .navbar li.activities").removeClass("active"),a("header .navbar li.presentation").addClass("active"))},{offset:90}),a("#references").waypoint(function(e){"down"===e?(a("header .navbar li.activities").removeClass("active"),a("header .navbar li.references").addClass("active")):"up"===e&&(a("header .navbar li.references").removeClass("active"),a("header .navbar li.activities").addClass("active"))},{offset:90}),a("#contact").waypoint(function(e){"down"===e?(a("header .navbar li.references").removeClass("active"),a("header .navbar li.contact").addClass("active")):"up"===e&&(a("header .navbar li.contact").removeClass("active"),a("header .navbar li.references").addClass("active"))},{offset:90})}),a(function(){a(".dynamic-left").each(function(){var e=a(this);e.waypoint(function(){e.addClass("animated fadeInLeft")},{offset:"75%"})}),a(".dynamic-right").each(function(){var e=a(this);e.waypoint(function(){e.addClass("animated fadeInRight")},{offset:"75%"})}),a(".dynamic-up").each(function(){var e=a(this);e.waypoint(function(){e.addClass("animated fadeInUp")},{offset:"75%"})}),a(".dynamic-down").each(function(){var e=a(this);e.waypoint(function(){e.addClass("animated fadeInDown")},{offset:"75%"})}),a(".dynamic-up").each(function(){var e=a(this);e.waypoint(function(){e.addClass("animated fadeInUp")},{offset:"75%"})}),a(".dynamic-down").each(function(){var e=a(this);e.waypoint(function(){e.addClass("animated fadeInDown")},{offset:"75%"})}),a(".dynamic-bounce").each(function(){var e=a(this);e.waypoint(function(){e.addClass("animated bounceIn")},{offset:"75%"})})}),a(function(){a('[data-toggle="tooltip"]').tooltip()}),a(function(){var e=!1;a(".google-maps-container").waypoint(function(n){if(!e&&"down"===n){e=!0,a(".google-maps-container .loader-container").fadeOut(2e3);var t=function e(n){var t=a(this);t.on("click",i),t.off("mouseleave",e),t.find("iframe").css("pointer-events","none")},i=function e(n){var i=a(this);i.off("click",e),i.find("iframe").css("pointer-events","auto"),i.on("mouseleave",t)};a(".google-maps-container .google-maps").on("click",i)}},{offset:"75%"})}),a(function(){a('a[href*="#modal-lexicon-"]').click(function(){var e=a(this).attr("href");return a("#modal-lexicon").modal("toggle").on("shown.bs.modal",function(a){window.setTimeout(function(){window.location=e},100)}),!1})}),a(function(){var e=a(window).height();a(window).resize(function(){e=a(this).height()}).scroll(function(){var n=100*a(this).scrollTop()/e;a(".scroll-bg-effect").each(function(){var t=a(this),i=100*t.height()/e,o=i/100*n/2+50;t.css("background-position","50% "+o+"%")})})}),a(function(){new cookieNoticeJS({})})})}(jQuery);