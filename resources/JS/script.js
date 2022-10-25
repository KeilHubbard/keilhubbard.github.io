//Google Jquery CDN link -> https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js

$(document).ready(function(){

    var $StdNavItem = $('.headerNav h2, .mobileMenu h2');
    var $StdContentItem = $('.contentHeader');
    var $allText = $('h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p');
  
    $StdNavItem.mouseenter(function(){
      $(this).fadeTo(200, 1);
    });
    $StdNavItem.mouseleave(function(){
      $(this).fadeTo(200, 0.6);
    });
  
    $('.mobilePull').click(function(){
      $('.mobileMenu').slideToggle(600);
    });
  
  //Start Light/Dark Toggles
    function SetDarkMode() {
        $StdNavItem.css('color', '#FFF');
        $StdContentItem.css('color', '#FFF');
        $('.lightMode').css('display', 'none');
        $('.darkMode').css('display', 'inline-flex');
        $('body').css('background-color', '#555');
        $('.stdHeader').css('border-bottom', '1px solid #EEE');
        $('.headerLogo').css('color', '#FFF');
        $('.headerLogo img').replaceWith('<img src="resources/images/LogoDark.svg">');
    };
  
    function SetLightMode(){
        $StdNavItem.css('color', '#333');
        $StdContentItem.css('color', '#777');
        $('.darkMode').css('display', 'none');
        $('.lightMode').css('display', 'inline-flex');
        $('.stdHeader').css('border-bottom', '1px solid #666');
        $('body').css('background-color', '#FFF');
        $('.headerLogo').css('color', '#000');
        $('.headerLogo img').replaceWith('<img src="resources/images/Logo.svg">');
    };
  
    function GetLight(){
        if (sessionStorage.getItem("siteLighting") == 1) {
          SetDarkMode();
        } else if (sessionStorage.getItem("siteLighting") == 0) {
          SetLightMode();
        } else {
          SetLightMode();
        }
    }
  
    GetLight();
  //Toggle to Dark/Night Mode
    $('.lightMode i').click(function(){
      SetDarkMode();
      sessionStorage.setItem("siteLighting", 1);
    });
  
  //Toggle to Light/Day Mode
    $('.darkMode i').click(function(){
      SetLightMode();
      sessionStorage.setItem("siteLighting", 0);
    });
  
  
  });