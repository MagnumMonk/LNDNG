$('.dotone').click(function(){

      $('.blocktwo, .blockthree').fadeTo( 200, 0 );
      $('.blockone').fadeTo( 200, 1 );

    });

    $('.dottwo').click(function(){
      $('.blockone, .blockthree').fadeTo( 200, 0 );
      $('.blocktwo').fadeTo( 200, 1 );

    });

    $('.dotthree').click(function(){
      $('.blockone, .blocktwo').fadeTo( 200, 0 );
      $('.blockthree').fadeTo( 200, 1 );

    });



    <!--
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
      var slides = document.getElementsByClassName("content-block");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    -->
