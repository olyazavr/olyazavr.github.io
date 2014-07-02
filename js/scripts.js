$(document).ready(function () {
    
    var navs = $('nav li'),
    htmlBody = $('html,body'),
    button = $('#proceedButton');
    
    function goToByScroll(dataslide) {
        console.log($('div[data-slide="' + dataslide + '"]').offset().top)
        htmlBody.animate({
          scrollTop: $('div[data-slide="' + dataslide + '"]').offset().top - 50
        }, 2000, 'easeInOutQuint');
      }

      navs.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
      });

      button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
      });
});