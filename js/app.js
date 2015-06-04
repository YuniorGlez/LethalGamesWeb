
var elements = document.getElementsByClassName("animate");
var activados = 0;
var actual;
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  var i;
  console.log('wScroll = ' + wScroll + '  a1 = ' + ($("#a1").offset().top));
  if (wScroll > $('#a1').offset().top/* - $(window).height*0.8*/){
      $('#a1').removeClass('none');
      $('#a1').addClass('animated');
      $('#a1').removeClass('animate');
  }
//  for (i = 0; i < elements.length; i++) {
//    actual = $('#' + $(elements[i]).attr("id"));
//
////    console.log(actual.offset().top);
//
//    if (wScroll > actual.offset().top) {
//      console.log(actual.attr("id") + ' esta visible');
//      actual.removeClass('none');
//      actual.addClass('animated');
//      actual.removeClass('animate');
//      break;
//    }
//  }


});
