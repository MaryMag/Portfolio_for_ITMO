$(document).ready(function(){
  // весь ваш код
  $('.slider').slick({dots: true });

  $('.comments-slider').slick({infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2});

  $('.accordion dd').hide(); 
  $('.accordion dd:eq(0)').show(); 

  $('dt a').on('click', switchTab); 

  function switchTab(event){ 
  event.preventDefault(); 

  var ActiveId = $(this); 
  ActiveId.addClass('prices-filial--active');
  var OtherId = ActiveId.siblings('dt');
  OtherId.removeClass('prices-filial--active');


  var ActiveText = ActiveId.parent().next(); 
  var OtherText = ActiveText.siblings('dd'); 

  ActiveText.show(); 
  OtherText.hide(); 

  }; 
  
});
