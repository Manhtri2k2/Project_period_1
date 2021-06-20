	$(document).ready(function(){
	var x = $(".product-wraper .detail-row").offset().top - 50;
	var w = $( window ).width();
	var r = $('.product-wraper .detail-row #right-side').height();
	$(window).scroll(function(event){
    var scroll = $(this).scrollTop();
	var y = $(".brands-product").offset().top - r;
	   if (scroll >= x && scroll <= y && w > 600){
	      $('.product-wraper .detail-row #right-side').css({
	         position: 'fixed',
	         top: '50px',
	         right: '0'
	      });
	   } else {
	      $('.product-wraper .detail-row #right-side').removeAttr('style');
	      $('.product-wraper .detail-row #right-side').css("position", "relative");
	   }
	   if (scroll > y && w > 600) {
	      $('.product-wraper .detail-row #right-side').css("top", parseInt(y-x)+"px");
	   }
	});
	});			