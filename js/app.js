var wScroll;
var elements = document.getElementsByClassName("animate");
var activados = 0;
var actual;
$(window).scroll(function () {

  wScroll = $(this).scrollTop();
  var i;
  console.log('wScroll = ' + wScroll);
  for (i = 0; i < elements.length; i++) {

    console.log(' $(elements[i]).offset().top = ' +  $(elements[i]).offset().top);
    //    console.log($(elements[i]) + ' ' +  $(elements[i]).);
    console.log('wScroll > $(elements[i]).offset().top = ' + (wScroll > $(elements[i]).offset().top);
    actual = $(elements[i]);
    if (wScroll > actual.offset().top) {
      actual.removeClass('none');
      actual.addClass('animated');
      actual.removeClass('animate');
      break;
    }
  }


});
