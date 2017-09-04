(function () {
  
  'use strict';
    var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {
      
      if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
        
        i++;
        
        $(this.element).addClass('item-animate');
        setTimeout(function(){
          
          $('body .animate-box.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn animated-fast');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated-fast');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight animated-fast');
              } else {
                el.addClass('fadeInUp animated-fast');
              }
              
              el.removeClass('item-animate');
            },  k * 200, 'easeInOutExpo' );
          });
          
        }, 100);
        
      }
      
    } , { offset: '85%' } );
  };
  
  
  var dropdown = function() {
    
    $('.has-dropdown').mouseenter(function(){
      
      var $this = $(this);
      $this
        .find('.dropdown')
        .css('display', 'block')
        .addClass('animated-fast fadeInUpMenu');
      
    }).mouseleave(function(){
      var $this = $(this);
      
      $this
        .find('.dropdown')
        .css('display', 'none')
        .removeClass('animated-fast fadeInUpMenu');
    });
    
  };


  var testimonialCarousel = function(){
    var owl = $('.owl-carousel-fullwidth');
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
    });
  };


  var goToTop = function() {
    
    $('.js-gotop').on('click', function(event){
      
      event.preventDefault();
      
      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 1200, 'easeInOutExpo');
      
      return false;
    });
    
    $(window).scroll(function(){
      
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }
      
    });
    
  };
  
  var conditionallyAddToggle = function () {
    if ($(window).width() < 780) {
      $('.scrollable').addClass('js-fh5co-nav-toggle');
    }
    else {
      $('.scrollable').removeClass('js-fh5co-nav-toggle');
    }
  }
  
  // Loading page
  var loaderPage = function() {
    $(".fh5co-loader").fadeOut("slow");
  };
  
  var counter = function() {
    $('.js-counter').countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  // Parallax
  var parallax = function() {
    $(window).stellar();
  };
  
  var imagePop = function () {
    $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');
    });
  }
  
  $(function(){
    parallax();
    contentWayPoint();
    dropdown();
    testimonialCarousel();
    goToTop();
    loaderPage();
    counter();
    conditionallyAddToggle();
    imagePop();
    
    $(".scrollable").on('click', function(event) {

      event.preventDefault();
      
      var link = $(this).attr('data-target');
      $(window).scrollTo(link, 2000);
    });
  });
}());