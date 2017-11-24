$(document).ready(function() {

  function dotInactive(dot) {
    $('#scrollDot'+dot).find(".midRing").fadeOut({ duration: 200, queue: false });
    $('#scrollDot'+dot).find(".outerRing").fadeOut({ duration: 200, queue: false });
    $('#scrollDot'+dot).find('.dot').animate({'opacity':'0.2'},{ duration: 100, queue: false });
  }

  function dotActive(dot) {
    $('#scrollDot'+dot).find(".midRing").fadeIn({ duration: 200, queue: false });
    $('#scrollDot'+dot).find(".outerRing").fadeIn({ duration: 200, queue: false });
    $('#scrollDot'+dot).find('.dot').animate({'opacity':'1'},{ duration: 100, queue: false });
  }

  $('#fullpage').fullpage({
    onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 1 && direction =='down'){
              $('#header').fadeIn();
              $('#footer').fadeIn();
              $('#scrollDotContainer').fadeIn();

              dotActive(2);
            } else if (index == 2 && direction == 'down') {
              dotInactive(2);
              dotActive(3);
            } else if (index == 3 && direction == 'down') {
              dotInactive(3);
              dotActive(4);
            } else if (index == 4 && direction == 'down') {
              dotInactive(4);
              dotActive(5);
            } else if (index == 5 && direction == 'up') {
              dotInactive(5);
              dotActive(4);
            } else if (index == 4 && direction == 'up') {
              dotInactive(4);
              dotActive(3);
            } else if (index == 3 && direction == 'up') {
              dotInactive(3);
              dotActive(2);
            } else if(index == 2 && direction == 'up'){
              $('#header').fadeOut();
              $('#footer').fadeOut();
              $('#scrollDotContainer').fadeOut();

              dotInactive(2);
            }
        }
  });


  $('.scrollText').click(function() {
    $.fn.fullpage.moveTo(2);
    dotActive(2);
  });

  $('#scrollDot2').click(function() {
    $.fn.fullpage.moveTo(2);
    dotInactive(3);
    dotInactive(4);
    dotInactive(5);
    dotActive(2);
  });

  $('#scrollDot3').click(function() {
    $.fn.fullpage.moveTo(3);
    dotInactive(2);
    dotInactive(4);
    dotInactive(5);
    dotActive(3);
  });

  $('#scrollDot4').click(function() {
    $.fn.fullpage.moveTo(4);
    dotInactive(2);
    dotInactive(3);
    dotInactive(5);
    dotActive(4);
  });

  $('#scrollDot5').click(function() {
    $.fn.fullpage.moveTo(5);
    dotInactive(2);
    dotInactive(3);
    dotInactive(4);
    dotActive(5);
  });


});
