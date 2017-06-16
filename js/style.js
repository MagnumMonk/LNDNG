    $('.hid').hide();

// major animations

function makeThicc(){$(this).addClass("cardh");};
function makeThin(){$(this).removeClass("cardh");};

$(document).ready(function(){

    $(".cover").hover(function(){
      $(this).toggleClass("hover");
    });

    $(".card").hover(function(){
      $(".p-name", this).toggleClass("p-nameh");
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
      } else {
        $('.navigation').removeClass('shrunk');
        $('.navtxt').removeClass('navtxth');
      }
    });
