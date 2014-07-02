$(document).ready(function () {
    
    var navs = $('nav li'),
    htmlBody = $('html,body'),
    button = $('#proceedButton');
    
    function goToByScroll(dataslide) {
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
    
//    $("form").submit(function(e) {
//          $.post($(this).attr("action"), // url 
//            $(this).serialize(), // data
//                function (data) { //success callback function
//                    alert("Email sent!");
//                }).error(function () {
//                    alert('Sending failed'); 
//                });
//            console.log(e)
//             e.preventDefault();
//          });
});