$(document).ready(function() {
  //Code for sub menu on hover
  $(function() {
    $('ul > li').hover(function() {
      $(this).find('ul.sub1').show(200);
    }, function() {
      $(this).find('ul.sub1').hide(200);
    });
  });

  //slideshow code
  $(function() {
    $('.prezi-content img:gt(0)').hide();
    setInterval(function() {
        $('.prezi-content :first-child').fadeOut()
          .next('img').fadeIn()
          .end().appendTo('.prezi-content');
      },

      3000);
  });

  //code for anything related to paragraphs
  $('#des').on('dblclick', function() {
    $('#des').css('display', 'none');
    $('#textarea1, #buttonOne').css('display', 'block');
  });

  $('#buttonOne').on('click', function() {
    $('#textarea1, #buttonOne').css('display', 'none');
    $('#des').html($('#textarea1').val());
    $('#des').css('display', 'block');
  });
  $('#des-two').on('dblclick', function() {
    $('#des-two').css('display', 'none');
    $('#textarea2, #buttonTwo').css('display', 'block');
  });
  $('#buttonTwo').on('click', function() {
    $('#textarea2, #buttonTwo').css('display', 'none');
    $('#des-two').html($('#textarea2').val());
    $('#des-two').css('display', 'block');
  });

  //code for anything related to tiles
  $('#resetAll').on('click', function() {
    $('.tiles').css('display', 'block');
  });
  $('#clearAll').on('click', function() {
    $('.tiles').css('display', 'none');
  });

  $('.tiles').on('click', function(tile) {
    $(this).fadeOut('1000', function(tile) {});
  });
}); //end of ready function
