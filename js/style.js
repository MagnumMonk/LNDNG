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
