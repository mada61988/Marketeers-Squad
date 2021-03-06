// This Code Belongs to Mohamed Ayman 
//      Linkidin: https://www.linkedin.com/in/mohamed-ayman-8b6b8b1b7


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
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top-blog-page').fadeIn('slow');
    } else {
      $('#back-to-top-blog-page').fadeOut('slow');
    }
  });

  $('#back-to-top-blog-page').click(function () {
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

//footer scroll spy

$(document).ready(function () { 
  
$("#footer .footer-links a").on('click', function (event) {

      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 3000, function () {

          window.location.hash = hash;
        });
      }
    });
})
function onLoad() {
  if (window.location.pathname == '/Marketeers-Squad/blog.html') {
    document.getElementById('courses').classList.add('active')
    document.getElementById('home').classList.remove('active')
    document.getElementById('pricing').classList.remove('active')
    document.getElementById('contact').classList.remove('active')
  }
  if (window.location.pathname == '/Marketeers-Squad/index.html' || '/Marketeers-Squad/') {
    document.getElementById('home').classList.add('active')
    document.getElementById('courses').classList.remove('active')
    document.getElementById('pricing').classList.remove('active')
    document.getElementById('contact').classList.remove('active')
  }
  if (window.location.pathname == '/Marketeers-Squad/pricing.html') {
    document.getElementById('pricing').classList.add('active')
    document.getElementById('courses').classList.remove('active')
    document.getElementById('home').classList.remove('active')
    document.getElementById('contact').classList.remove('active')
  }
  if (window.location.pathname == '/Marketeers-Squad/contact.html') {
    document.getElementById('contact').classList.add('active')
    document.getElementById('courses').classList.remove('active')
    document.getElementById('home').classList.remove('active')
    document.getElementById('pricing').classList.remove('active')
  }

}
function pauseCarousel() {
  $('#carouselExampleControls').carousel('pause');
}
function cycleCarousel() {
  $('#carouselExampleControls').carousel('cycle');

}

function test() {
  const re = /^\d*(\.\d+)?$/;
  '123.3'.match(re)     // true
  '123!3'.match(re)
}
const re = /^\d*(\.\d+)?$/;

function doc(id) {
  return document.getElementById(id).value;
};
function sendEmail() {
  if (doc('name') != "" && doc('email').indexOf('@') > -1 && doc('email').indexOf('.com') > -1 && doc('company') != "" && doc('mobile-number').match(re) && doc('mobile-number') != "" && doc('mobile-number').length <= 11 && doc('message') != "") {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "Elliott Nathann",
      Password: "4523534mada",
      To: 'mada61988@gmail.com',
      From: "elliottnathann@gmail.com",
      Subject: "Marketeers squad client emails",
      Body: "",
    })
      .then(function (message) {
        
        document.getElementById('email-sent').style.display = 'block'
      });
  }
  if (doc('name') == "") document.getElementById('name-validation').style.display = 'block'
  else { document.getElementById('name-validation').style.display = 'none' }
  if (doc('email').indexOf('@') == -1 || doc('email').indexOf('.com') == -1) document.getElementById('email-validation').style.display = 'block'
  else { document.getElementById('email-validation').style.display = 'none' }
  if (doc('company') == "") document.getElementById('company-validation').style.display = 'block'
  else { document.getElementById('company-validation').style.display = 'none' }
  if (!doc('mobile-number').match(re) || doc('mobile-number') == "" || doc('mobile-number').length < 11) document.getElementById('mobile-number-validation').style.display = 'block'

  else { document.getElementById('mobile-number-validation').style.display = 'none' }
  if (doc('message') == "") document.getElementById('message-validation').style.display = 'block'
  else { document.getElementById('message-validation').style.display = 'none' }


}

//readmore readless buttons

function display (id,action){
   document.getElementById(id).style.display=action;
}

arr=[
  'hero',
//    'why-we-rock',
// 'our-vision',
// , 'content-creation',
// 'web-development',
// 'full-marketing-strategy',
// 'media-production',
// 'designs',
// 'styling-and-photoshoots'
]

function  windowSizeCheck(){
if(window.location.pathname == "/Marketeers-Squad/" || window.location.pathname == "/Marketeers-Squad/index.html" ){
  if(window.innerWidth<1000){
    for(i=0;i<arr.length;i++){
     
    showLessButtonClicked(arr[i]);
  }
}
  else{
    for(i=0;i<arr.length;i++){
    desktopView(arr[i]);
      }
  };
}
  
}
console.log(window.location)
function desktopView (sectionID){
display(`${sectionID}-showmore-button`,'none');
display(`${sectionID}-showless-button`,'none');
display(`${sectionID}-hidden-text`,'inline')
} 

function showMoreButtonClicked (sectionID){
  display(`${sectionID}-showmore-button`,'none')
  display(`${sectionID}-hidden-text`,"inline")
  display(`${sectionID}-showless-button`,"inline")
if(sectionID == 'hero' && window.innerWidth <=600){document.getElementById('hero').style.height='33rem';}


}

function showLessButtonClicked (sectionID){
display(`${sectionID}-hidden-text`,'none')
display(`${sectionID}-showmore-button`,"inline")
display(`${sectionID}-showless-button`,"none")
if(sectionID == 'hero'&& window.innerWidth <=600){document.getElementById('hero').style.height='20rem';}

}

function marketing(){
  document.getElementById('team-content-creation').style.display="none"
  document.getElementById('design').style.display="none"
  document.getElementById('motion').style.display="none"
  document.getElementById('moderation').style.display="none"
  document.getElementById('account-management').style.display="none"
  document.getElementById('social-media').style.display="none"
  document.getElementById('marketing').style.display="block"


}
function contentCreation (){
  document.getElementById('marketing').style.display="none"
  document.getElementById('motion').style.display="none"
  document.getElementById('moderation').style.display="none"
  document.getElementById('account-management').style.display="none"
  document.getElementById('social-media').style.display="none"
  document.getElementById('design').style.display="none"
  document.getElementById('team-content-creation').style.display="block"

}
function design(){
  document.getElementById('marketing').style.display="none"
  document.getElementById('team-content-creation').style.display="none"
  document.getElementById('motion').style.display="none"
  document.getElementById('moderation').style.display="none"
  document.getElementById('account-management').style.display="none"
  document.getElementById('social-media').style.display="none"
  document.getElementById('design').style.display="block"
}
 
function motion(){
  document.getElementById('marketing').style.display="none"
  document.getElementById('moderation').style.display="none"
  document.getElementById('account-management').style.display="none"
  document.getElementById('social-media').style.display="none"
  document.getElementById('team-content-creation').style.display="none"
  document.getElementById('design').style.display="none"
  document.getElementById('motion').style.display="block"
}




function socialMedia(){
  document.getElementById('marketing').style.display="none"
  document.getElementById('moderation').style.display="none"
  document.getElementById('account-management').style.display="none"
  document.getElementById('team-content-creation').style.display="none"
  document.getElementById('design').style.display="none"
  document.getElementById('motion').style.display="none"
  document.getElementById('social-media').style.display="block"
}


function moderation (){
  document.getElementById('marketing').style.display="none"
  document.getElementById('account-management').style.display="none"
  document.getElementById('team-content-creation').style.display="none"
  document.getElementById('design').style.display="none"
  document.getElementById('motion').style.display="none"
  document.getElementById('social-media').style.display="none"
  document.getElementById('moderation').style.display="block"
}

function accountManagement (){
  document.getElementById('marketing').style.display="none"
  document.getElementById('team-content-creation').style.display="none"
  document.getElementById('design').style.display="none"
  document.getElementById('motion').style.display="none"
  document.getElementById('social-media').style.display="none"
  document.getElementById('moderation').style.display="none"
  document.getElementById('account-management').style.display="block"

}


function descriptionButtonClicked(){
setTimeout(function (){ document.getElementById('nav-description-tab').style.backgroundColor="#3e090a";
  document.getElementById('nav-description-tab').style.color="white";

setTimeout(function (){ document.getElementById('nav-description-tab').style.backgroundColor="white";
  document.getElementById('nav-description-tab').style.color="black";

setTimeout(()=>{ document.getElementById('nav-description-tab').style.backgroundColor="#3e090a";
  document.getElementById('nav-description-tab').style.color="white";
  
  setTimeout(()=>{ document.getElementById('nav-description-tab').style.backgroundColor="white";
document.getElementById('nav-description-tab').style.color="black";

},400);
},400);
},400);
},3000);
 
}
function courseContentButtonClicked(){

  setTimeout(function (){ document.getElementById('nav-course-content-tab').style.backgroundColor="#3e090a";
  document.getElementById('nav-course-content-tab').style.color="white";

setTimeout(function (){ document.getElementById('nav-course-content-tab').style.backgroundColor="white";
  document.getElementById('nav-course-content-tab').style.color="black";

setTimeout(()=>{ document.getElementById('nav-course-content-tab').style.backgroundColor="#3e090a";
  document.getElementById('nav-course-content-tab').style.color="white";

  setTimeout(()=>{ document.getElementById('nav-course-content-tab').style.backgroundColor="white";
document.getElementById('nav-course-content-tab').style.color="black";

},400);
},400);
},400);
},3000);
}

function aboutInstructorButtonClicked(){
  setTimeout(function (){ document.getElementById('nav-about-tab').style.backgroundColor="#3e090a";
  document.getElementById('nav-about-tab').style.color="white";

setTimeout(function (){ document.getElementById('nav-about-tab').style.backgroundColor="white";
  document.getElementById('nav-about-tab').style.color="black";

setTimeout(()=>{ document.getElementById('nav-about-tab').style.backgroundColor="#3e090a";
  document.getElementById('nav-about-tab').style.color="white";

  setTimeout(()=>{ document.getElementById('nav-about-tab').style.backgroundColor="white";
document.getElementById('nav-about-tab').style.color="black";

},400);
},400);
},400);
},3000);
}
function directToContactPage() {
window.location.href = window.location.origin+'/Marketeers-Squad/contact.html'

};

function redirectToHomePage(){ 
  window.loacation.href= window.location.origin + '/Marketeers-Squad/'
}

window.onload= windowSizeCheck;
window.onresize= windowSizeCheck;




//===============================================================================
// why we rock readmore action 
//=================================================================================

$(".sidebar-box-why-we-rock .button").click(function() {
      
  totalHeight = 0;

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more-why-we-rock')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
}); 

//===============================================================================
// why we rock readmore action 
//=================================================================================



//===============================================================================
// our vision readmore action 
//=================================================================================

$(".sidebar-box-our-vision .button").click(function() {
      
  totalHeight = 0;

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more-our-vision')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
}); 

//===============================================================================
// our vision readmore action 
//=================================================================================


//===============================================================================
// content-creation readmore action 
//=================================================================================

$(".sidebar-box-content-creation .button").click(function() {
      
  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more-content-creation')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
}); 

//===============================================================================
// content creation readmore action 
//=================================================================================



//===============================================================================
// WEB DEVELOPMENT readmore action 
//=================================================================================

$(".sidebar-box-web-development .button").click(function() {
      
  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more-web-development')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
}); 

//===============================================================================
// WEB DEVELOPMENT readmore action 
//=================================================================================



//===============================================================================
// FULL MARKETING STRATEGY readmore action 
//=================================================================================

$(".sidebar-box-full-marketing-strategy .button").click(function() {
      
  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more-full-marketing-strategy')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
}); 

//===============================================================================
// FULL MARKETING STRATEGY readmore action 
//=================================================================================


//===============================================================================
// MEDIA PRODUCTION STRATEGY readmore action 
//=================================================================================

$(".sidebar-box-media-production .button").click(function() {
      
  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more-media-production')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
}); 

//===============================================================================
// MEDIA PRODUCTION STRATEGY readmore action 
//=================================================================================


//===============================================================================
// DESIGNS readmore action 
//=================================================================================

$(".sidebar-box-designs .button").click(function() {
      
  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more-designs')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
}); 

//===============================================================================
// DESIGNS STRATEGY readmore action 
//=================================================================================


//===============================================================================
// STYLING AND PHOTOSHOOTS readmore action 
//=================================================================================

$(".sidebar-box-styling-and-photoshoots .button").click(function() {
      
  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more-styling-and-photoshoots')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
}); 

//===============================================================================
// STYLING AND PHOTOSHOOTS readmore action 
//=================================================================================


//===============================================================================
// HERO TITLE readmore action 
//=================================================================================

$(".sidebar-box-hero-title .button").click(function() {
      
  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more-hero-title')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
}); 

//===============================================================================
// HERO TITLE readmore action 
//=================================================================================

// This Code Belongs to Mohamed Ayman 
//      Linkidin: https://www.linkedin.com/in/mohamed-ayman-8b6b8b1b7

