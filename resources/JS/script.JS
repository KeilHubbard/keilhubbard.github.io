//CDN link -> https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js

$(document).ready(function(){

  var $StdNavItem = $('.headerNav div, .mobileMenu h2');

  $StdNavItem.mouseenter(function(){
    $(this).fadeTo(200, 1);
  });
  $StdNavItem.mouseleave(function(){
    $(this).fadeTo(200, 0.5);
  });

  $('.mobilePull').click(function(){
        $('.mobileMenu').slideToggle('slow');
    });
});
