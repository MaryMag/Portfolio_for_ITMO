$(document).ready(function(){
  // весь ваш код
  $('.slider').slick({ 
  dots: true, 
  infinite: true, 
  speed: 300, 
  slidesToShow: 1, 
  adaptiveHeight: true, 
  autoplay: true, 
  autoplaySpeed: 4000, 
  });

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
