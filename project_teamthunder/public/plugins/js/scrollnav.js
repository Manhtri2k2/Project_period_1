$(window).scroll(function(event){
   var scroll = $(this).scrollTop()
   if (scroll > 250){
         $(".navigator").css("background-color", "rgba(44, 53, 49, 0.5)");
         $('.navigator .navbar-header, .navigator .collapse form').css("padding", "0");
         $('.navigator .navbar-nav li>a').css({"padding-top": "15px", "padding-bottom": "15px"});
         $('.navigator .navbar-nav li>a, .navigator .navbar-header, .navigator .collapse form, .navigator').css("transition", "0.6s");
   } else {
      $(".navigator").css("background-color", "rgb(44, 53, 49)");
      $('.navigator .navbar-header, .navigator .collapse form').css("padding", "15px 0");
      $('.navigator .navbar-nav li>a').css({"padding-top": "30px", "padding-bottom": "30px"});
   }
});
$('.navigator .navbar-form div#t2').click(function(event) {
   $('.navigator .navbar-form button').css({
      'color': '#2c3531',
      'background-color': 'white',
      'display': 'inline-block'
   });
   $('.navigator .navbar-form .form-control').css({
      'width': '175px',
      'background-color': 'white'
   });
   $('.navigator .navbar-form div#t2').hide();
});
   $('.navigator .navbar-form .form-control').mouseover(function(event) {
      $('.navigator .navbar-form .form-control').mouseout(function(event) {
         $('.navigator .navbar-form div#t2').show();
         $('.navigator .navbar-form .form-control, .navigator .navbar-form button').removeAttr('style');
      });
   });
