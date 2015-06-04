var wScroll;
$(window).scroll(function () {

  wScroll = $(this).scrollTop();
  //  console.log('wScroll =' + wScroll);
  //  console.log('.animate = ' + $('.animate').offset().top);
  var elements = document.getElementsByClassName("animate");
  var i;
  for (i = 0; i < elements.length; i++) {
    console.log
    if (wScroll > $(elements[i]).offset().top - $(window).height() /1.1) {
      $(elements[i]).removeClass('none');
      $(elements[i]).addClass('animated');
      $(elements[i]).removeClass('animate');

    }
  }

});
