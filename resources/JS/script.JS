//Google Jquery CDN link -> https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js

$(document).ready(function(){

  var $StdNavItem = $('.headerNav h2, .mobileMenu h2');
  var $allText = $('h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p')

  $StdNavItem.mouseenter(function(){
    $(this).fadeTo(200, 1);
  });
  $StdNavItem.mouseleave(function(){
    $(this).fadeTo(200, 0.6);
  });

  $('.mobilePull').click(function(){
    $('.mobileMenu').slideToggle(600);
  });

/*Start Light/Dark Toggles*/
/*Set to Dark/Night Mode*/
  $('.lightMode i').click(function(){
    $StdNavItem.css('color', '#FFF');
    $('.lightMode').css('display', 'none');
    $('.darkMode').css('display', 'inline-flex');
    $('body').css('background-color', '#555');
    $('.stdHeader').css('border-bottom', '1px solid #EEE');
    $('.headerLogo').css('color', '#FFF');
    $('.headerLogo img').replaceWith('<img src="resources/images/LogoDark.svg">');
  });

  $('.darkMode i').click(function(){
    $StdNavItem.css('color', '#333');
    $('.darkMode').css('display', 'none');
    $('.lightMode').css('display', 'inline-flex');
    $('.stdHeader').css('border-bottom', '1px solid #666');
    $('body').css('background-color', '#FFF');
    $('.headerLogo').css('color', '#000');
    $('.headerLogo img').replaceWith('<img src="resources/images/Logo.svg">');
  });



});
