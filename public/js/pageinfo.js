$(document).ready(function() {

  $(".backBtn").click(function() {
    window.history.back();
  });

  var windowWidth = $(window).width();
  if (windowWidth < 992) {
    $('.modalCopyContainer').css({'padding-left':'10px', 'padding-right':'10px'});
    $('.infoPage img').css({'margin-left':'10px'})
    $('.infoPage span.icon-close').css({'margin-right':'10px'})
  } else {
    $('.modalCopyContainer').css({'padding-left':'440px', 'padding-right':'440px'});
    $('.infoPage img').css({'margin-left':'118px'})
    $('.infoPage span.icon-close').css({'margin-right':'128px'})
  }

});
