var wScroll;
var elements;
var activados = 0;
$(window).scroll(function () {

  wScroll = $(this).scrollTop();
  //  console.log('wScroll =' + wScroll);
  //  console.log('.animate = ' + $('.animate').offset().top);
  elements = document.getElementsByClassName("animate");
  var i;
  for (i = 0; i < elements.length; i++) {
    console.log($(elements[i]) + ' ' +  $(elements[i]).offset().top);
    if (wScroll > $(elements[i]).offset().top - 100) {
      $(elements[i]).removeClass('none');
      $(elements[i]).addClass('animated');
      $(elements[i]).removeClass('animate');
      activados++;
    }
  }

});
