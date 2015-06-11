
var elements = document.getElementsByClassName("animated");
var activados = 0;
var actual;
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  var i;
  for (i = 0; i < elements.length; i++) {

    if (wScroll > $(elements[i]).offset().top - $(window).height() * 0.8) {
      console.log("Active " + $(elements[i]).attr("id"));
      $(elements[i]).removeClass('none');
      elements[i].className = elements[i].className.replace(' -',' ');
    }
  }


});
