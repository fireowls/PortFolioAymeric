console.log('lunch script');
$(() => {

  $('.js-scroll-trigger').on('click', (event) => {
    
    let page = $(this).attr('href');
    let speed = 750;

      // $(':root').animate({
      //   scrollTop: $(page).offset().top
      // }, speed);
    return false;
  });

});