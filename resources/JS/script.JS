$(document).ready(function(){
  $('.headerNav h2').mouseenter(function(){
    $(this).fadeTo(200, 1);
  });
  $('.headerNav h2').mouseleave(function(){
    $(this).fadeTo(200, 0.5);
  });
});
