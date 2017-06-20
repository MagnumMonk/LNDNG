    $('.hid').hide();


  // major animations

function makeThicc(){
  $(this).addClass("cardh");
  $(".p-name", this).addClass("p-nameh");
  $('.price', this).addClass("priceshow");
};
function makeThin(){
  $(this).removeClass("cardh");
  $(".p-name", this).removeClass("p-nameh");
  $('.price', this).removeClass("priceshow");
};

$(document).ready(function(){

    $(".cover").hover(function(){
      $(this).toggleClass("hover");
    });

    $('.card').hoverIntent(makeThicc, makeThin);

    $(".price").hover(function(){
      $(this).toggleClass("priceh");
      $('p',this).toggle();
    });
    $('.list').hover(function(){
      $(this).toggleClass('nvgh');
    });

  });

// auto-slideshow (avoiding show/hide because no transition time supported)

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
  showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = $(".content-block");
    var dots = $(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.opacity = "1";
    dots[slideIndex-1].className += " active";
  };

// slideshow reset on click

  var slider = function() {
    $('.next').trigger('click');
  };
  var timer = window.setInterval(slider, 5000);
   $('.next, .prev, .dot').click(function(){
     window.clearInterval(timer);
     timer = window.setInterval(slider, 5000);
   });

// navbar shrink

   $(window).scroll(function() {
      if ($(document).scrollTop() > 150) {
        $('.navigation').addClass('shrunk');
        $('.navtxt').addClass('navtxth');
        $('.mob-navb').addClass('mob-navbh');
      } else {
        $('.navigation').removeClass('shrunk');
        $('.navtxt').removeClass('navtxth');
        $('.mob-navb').removeClass('mob-navbh');
      }
    });

// parallax

    $(document).ready(function(){
          $('body').mousemove(function(e){
            var x = -(e.pageX + this.offsetLeft) / 30;
            var y = -(e.pageY + this.offsetTop) / 30;
            $('.content-block3').css('background-position', x + 'px ' + y + 'px' );
          });
      });

// scrolling rollin rollin

$('#feedback, #mfeedback').click(function(){
  $('html, body').animate({
    scrollTop: $('.content-block4').offset().top},'slow'
  );
  $('.mob-navb').hide();
});

$('#contact, #mcontact').click(function(){
  $('html, body').animate({
    scrollTop: $('#contacts').offset().top},'slow'
  );
  $('.mob-navb').hide();
});

$('#service, #mservice').click(function(){
  $('html, body').animate({
    scrollTop: $('.content-block3').offset().top},'slow'
  );
  $('.mob-navb').hide();
});

$('#products, #mproducts').click(function(){
  $('html, body').animate({
    scrollTop: $('.content-block2').offset().top - 50},'slow'
  );
  $('.mob-navb').hide();
});

$('#home, #mhome').click(function(){
  $('html, body').animate({ scrollTop: 0 },'slow');
  $('.mob-navb').hide();
});

//navbar

$('.navicon').click(function(){
  $('.mob-navb').slideToggle(100);
});

$(document).ready(function() {
    function checkWidth() {
        var windowSize = $(window).width();
        if (windowSize >= 850) {
            $('.mob-navb').hide();
        }
      }
    checkWidth();
    $(window).resize(checkWidth);
  });
