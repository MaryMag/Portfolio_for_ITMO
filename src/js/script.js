$(document).ready(function(){
  // весь ваш код
  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true, 
    speed: 300,
    autoplay: true, 
    autoplaySpeed: 4000});

  $('.comments-slider').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true, 
    autoplaySpeed: 4000});

  // $('.comments-slider').find('sli')

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
