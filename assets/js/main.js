/**
* Template Name: Company - v2.2.1
* Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
    (index === 0) ?
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>") :
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('.carousel-content ').addClass('animate__animated animate__fadeInDown');
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });

  // Skills section
  $('.skills-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function () {
    aos_init();
  });



  // rotate team logos 

  var p = 0;
  console.log('window size', window.innerWidth)
  function moveit() {
    p += 0.01;
    var xcenter
    var ycenter
    var r = window.innerWidth <= 767.98 ? 120 : 160;
    if (window.innerWidth <= 575.98) { xcenter = 140; ycenter = 140; }
    if (window.innerWidth > 575.98 && window.innerWidth < 991.98) { xcenter = 300; ycenter = 300; }

    else if (window.innerWidth > 991.98) {
      xcenter = 220;
      ycenter = 220;

    }


    var newLeft = Math.floor(xcenter + (r * Math.cos(p + 30)));
    var newTop = Math.floor(ycenter + (r * Math.sin(p + 30)));
    var newLeft1 = Math.floor(xcenter + (r * Math.cos(p + 60)));
    var newTop1 = Math.floor(ycenter + (r * Math.sin(p + 60)));
    var newLeft2 = Math.floor(ycenter + (r * Math.cos(p + 90)));
    var newTop2 = Math.floor(xcenter + (r * Math.sin(p + 90)));
    var newLeft3 = Math.floor(ycenter + (r * Math.cos(p + 120)));
    var newTop3 = Math.floor(xcenter + (r * Math.sin(p + 120)));
    var newLeft4 = Math.floor(xcenter + (r * Math.cos(p + 150)));
    var newTop4 = Math.floor(ycenter + (r * Math.sin(p + 150)));
    var newLeft5 = Math.floor(xcenter + (r * Math.cos(p + 180)));
    var newTop5 = Math.floor(ycenter + (r * Math.sin(p + 180)));
    var newLeft6 = Math.floor(ycenter + (r * Math.cos(p + 210)));
    var newTop6 = Math.floor(xcenter + (r * Math.sin(p + 210)));
    var newLeft7 = Math.floor(ycenter + (r * Math.cos(p + 240)));
    var newTop7 = Math.floor(xcenter + (r * Math.sin(p + 240)));
    var newLeft8 = Math.floor(xcenter + (r * Math.cos(p + 270)));
    var newTop8 = Math.floor(ycenter + (r * Math.sin(p + 270)));
    $('#friends').animate({
      top: newTop,
      left: newLeft,
    }, 10, function () {
      moveit()
    });
    $('#friends2').animate({
      top: newTop1,
      left: newLeft1,
    }, 10, function () {
      moveit();
    });
    $('#friends3').animate({
      top: newTop2,
      left: newLeft2,
    }, 10, function () {
      moveit();
    });
    $('#friends4').animate({
      top: newTop3,
      left: newLeft3,
    }, 10, function () {
      moveit();
    });
    $('#friends5').animate({
      top: newTop4,
      left: newLeft4,
    }, 10, function () {
      moveit();
    });
    $('#friends6').animate({
      top: newTop5,
      left: newLeft5,
    }, 10, function () {
      moveit();
    });
    $('#friends7').animate({
      top: newTop6,
      left: newLeft6,
    }, 10, function () {
      moveit();
    });
    $('#friends8').animate({
      top: newTop7,
      left: newLeft7,
    }, 10, function () {
      moveit();
    });
    $('#friends9').animate({
      top: newTop8,
      left: newLeft8,
    }, 10, function () {
      moveit();
    });
  }
  $(document).ready(function () {
    moveit();
  });


  // var p = 0;

  // function moveit() {
  //   p += 0.01;

  //   var r = 100;
  //   var xcenter = 200;
  //   var ycenter = 200;

  //   var x = 100;

  //   var newLeft = Math.floor(xcenter + (r * Math.cos(p)));
  //   var newTop = Math.floor(ycenter + (r * Math.sin(p)));
  //   var newLeft1 = Math.floor(xcenter + -(r * Math.cos(p)));
  //   var newTop1 = Math.floor(ycenter + -(r * Math.sin(p)));
  //   var newLeft2 = Math.floor(xcenter + (x * Math.cos(p)) + 30);
  //   var newTop2 = Math.floor(ycenter + (x * Math.sin(p)) + 30);
  //   var newLeft3 = Math.floor(xcenter + -(x * Math.cos(p)));
  //   var newTop3 = Math.floor(ycenter + -(x * Math.sin(p)));

  //   $('#friends').animate({
  //     top: newTop,
  //     left: newLeft,
  //   }, 10, function () {
  //     moveit()
  //   });
  //   $('#friends2').animate({
  //     top: newTop1,
  //     left: newLeft1,
  //   }, 10, function () {
  //     moveit();
  //   });
  //   $('#friends3').animate({
  //     top: newTop2,
  //     left: newLeft2,
  //   }, 10, function () {
  //     moveit();
  //   });
  //   $('#friends4').animate({
  //     top: newTop3,
  //     left: newLeft3,
  //   }, 10, function () {
  //     moveit();
  //   });
  // }
  // $(document).ready(function () {
  //   moveit();
  // });
  $(document).ready(function () {
    // get current URL path and assign 'active' class
    var pathname = window.location.pathname;
    $('.navmenu1 > li > a[href="' + pathname + '"]').parent().addClass('active');
  })
  $(function () {
    // Auto play modal video
    $(".video").click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  });

})(jQuery);

function onLoad() {
  if (window.location.pathname == '/blog.html') {
    document.getElementById('courses').classList.add('active')
    document.getElementById('home').classList.remove('active')
    document.getElementById('pricing').classList.remove('active')
    document.getElementById('contact').classList.remove('active')
  }
  if (window.location.pathname == '/index.html') {
    document.getElementById('home').classList.add('active')
    document.getElementById('courses').classList.remove('active')
    document.getElementById('pricing').classList.remove('active')
    document.getElementById('contact').classList.remove('active')
  }
  if (window.location.pathname == '/pricing.html') {
    document.getElementById('pricing').classList.add('active')
    document.getElementById('courses').classList.remove('active')
    document.getElementById('home').classList.remove('active')
    document.getElementById('contact').classList.remove('active')
  }
  if (window.location.pathname == '/contact.html') {
    document.getElementById('contact').classList.add('active')
    document.getElementById('courses').classList.remove('active')
    document.getElementById('home').classList.remove('active')
    document.getElementById('pricing').classList.remove('active')
  }

}
console.log(window.location)