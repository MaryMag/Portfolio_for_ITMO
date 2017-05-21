$(document).ready(function(){
  // весь ваш код

  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  $('.slider').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true, 
    speed: 300,
    autoplay: true, 
    autoplaySpeed: 4000});

});

 //  $('.responsive').slick({
 //  dots: true,
 //  infinite: true,
 //  speed: 300,
 //  autoplay: true,
 //  autoplaySpeed: 4000,
 //  slidesToShow: 2,
 //  slidesToScroll: 1,
 //  responsive: [
 //    {
 //      breakpoint: 768,
 //      settings: {
 //        slidesToShow: 4,
 //        slidesToScroll: 1
 //      }
    
 //    // You can unslick at a given breakpoint now by adding:
 //    // settings: "unslick"
 //    // instead of a settings object
 //  ]
 // });



  // $('.comments-slider').slick({
  //   dots: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 300,
  //   autoplay: true, 
  //   autoplaySpeed: 4000});

  // $('.comments-slider').find('sli')

  // $('.burger-open').on('click', OpenBurger);
  // function OpenBurger(event){
  //   event.preventDefault();
  //   $('.main-nav').fadeIn(400);
  //   $('.burger-open').fadeOut(700);
  // };

  // $('.burger-close').on('click', CloseBurger);
  // function CloseBurger(event){
  //   event.preventDefault();
  //   $('.main-nav').fadeOut(700);
  //   $('.burger-open').fadeIn(400);
  // };

  // $('.filial__modal-window').hide();
  // $('.filial__title').on('click', OpenModal); 
  // $('.close-modal').on('click',CloseModal);
  // $('#overlay').on('click',CloseModal);

  // function OpenModal(event){ 
  // event.preventDefault();

  // if ($(window).width() < 768) {

  //    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
  //       function(){ // пoсле выпoлнения предъидущей aнимaции
  //         $('#filial__modal-window') 
  //           .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
  //           .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
  //       })
  //  }

  // // var ActiveId = $(this);
  // // var ActiveModal = ActiveId.siblings('filial__modal-window');
  // // ActiveModal.show();
  // };

  // function CloseModal(event){
  //   event.preventDefault();
  //   $('#filial__modal-window')
  //     .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
  //       function(){ // пoсле aнимaции
  //         $(this).css('display', 'none'); // делaем ему display: none;
  //         $('#overlay').fadeOut(400); // скрывaем пoдлoжку
  //       }
  //     );
  //   // $('.filial__modal-window').hide();
  // };

// $('rel="tab1"').show();
// $('.tab_container h3').removeClass('.d_active');

// $('.tabs li').on('click', function() { 
// $(this).addClass('active') 
// .siblings() 
// .removeClass('active'); 

// var activeId = $(this).attr('rel'); 
// var activePanel = $('#' + activeId); 

// var othersPanel = activePanel.siblings(); 

// othersPanel.hide(); 
// activePanel 
// .addClass('d_active') 
// .fadeIn(); 


// }); 


//   $('.accordion dd').hide(); 
//   $('.accordion dd:eq(0)').show(); 

//   $('dt a').on('click', switchTab); 

//   function switchTab(event){ 
//   event.preventDefault();

//   $('dt a').removeClass('prices-filial--active');
//   var ActiveId = $(this); 
//   ActiveId.addClass('prices-filial--active');
//   // var OtherId = ActiveId.siblings('dt');
//   // OtherId.removeClass('prices-filial--active');


//   var ActiveText = ActiveId.parent().next(); 
//   var OtherText = ActiveText.siblings('dd'); 

//   ActiveText.show(); 
//   OtherText.hide(); 

//   }; 
  
// });
