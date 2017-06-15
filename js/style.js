    $('.hid').hide();

$(document).ready(function(){

    $(".cover").hover(function(){
      $(this).toggleClass("hover");
    });

    $(".card").hover(
      function(){
        $(this).addClass("cardh");
      },
      function(){
        $(this).removeClass("cardh");
      }
    );

    $(".price").hover(function(){
      $(this).toggleClass("priceh");
      $('p',this).toggle();
    });
    $('.list').hover(function(){
      $(this).toggleClass('nvgh');
    });

  });

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

  var slider = function() {
    $('.next').trigger('click');
  };
  var timer = window.setInterval(slider, 5000);
   $('.next, .prev, .dot').click(function(){
     window.clearInterval(timer);
     timer = window.setInterval(slider, 5000);
   });
