// Плавный скрол вниз
jQuery(document).ready(function($) {
 $('a.ancLinks').click(function(event) {
   var elementClick = $(this).attr('href');
   var dest = $(elementClick).offset().top;
   $('html,body').animate({scrollTop: dest}, 1100);
   });
   });
// Скрываем меню
jQuery(document).ready(function($) {
  $('.header-box_button').click(function(event) {
    if($('.header-box__item').is(":hidden")) {
      $('.header-box__item').show('slow');
    } else {
      $('.header-box__item').hide('slow');
    }
  });
});

// Ajax Send Form
$(document).ready(function() {
  $("#main-form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
// $('#myModal').modal('show');    Вызывает модальное окно
alert('Good');
$('#main-form').trigger("reset");
});
    return false;
  });
})
// 

/* Responsive-Tabs bootstrap3  doc/GitHub    ->  ---    
website how us it  ->  http://cssfollow.ru/ispolzovanie-bootsrap-3-tabov-bez-bootstrapa/
*/                          
$(document).ready(function () {

  $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
              var $tab = $(this);
              var $info = $('#nested-tabInfo');
              var $name = $('span', $info);

              $name.text($tab.text());

              $info.show();
            }
          });

  $('#ChildVerticalTab_1').easyResponsiveTabs({
    type: 'vertical',
    width: 'auto',
    fit: true,
            tabidentify: 'ver_1', // The tab groups identifier
            activetab_bg: '#fff', // background color for active tabs in this group
            inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
            active_border_color: '#c1c1c1', // border color for active tabs heads in this group
            active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
          });      
  $('#ChildVerticalTab_2').easyResponsiveTabs({
    type: 'vertical',
    width: 'auto',
    fit: true,
            tabidentify: 'ver_2', // The tab groups identifier
            activetab_bg: '#fff', // background color for active tabs in this group
            inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
            active_border_color: '#c1c1c1', // border color for active tabs heads in this group
            active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
          });      
  $('#ChildVerticalTab_3').easyResponsiveTabs({
    type: 'vertical',
    width: 'auto',
    fit: true,
            tabidentify: 'ver_3', // The tab groups identifier
            activetab_bg: '#fff', // background color for active tabs in this group
            inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
            active_border_color: '#c1c1c1', // border color for active tabs heads in this group
            active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
          });

});
// 

/* Magnific Popup  doc/GitHub        ->  https://github.com/dimsemenov/Magnific-Popup    
website how us it                 ->  http://dimsemenov.com/plugins/magnific-popup/documentation.html
js file generator default all in  ->  http://dimsemenov.com/plugins/magnific-popup//
*/
$('button.order-popup').magnificPopup({
  items: {
    src: '#popup-main',
    type: 'inline',
    mainClass: 'mfp-fade'
  }
});
$('.maps').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
    patterns: {
      dailymotion: {

        index: 'dailymotion.com',
        
        id: function(url) {        
          var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
          if (m !== null) {
            if(m[4] !== undefined) {

              return m[4];
            }
            return m[2];
          }
          return null;
        },
        
        src: 'https://snazzymaps.com/embed/30239'
        
      }
    }
  }
  

});

// 

/* Slider Slick  doc/GitHub          ->  https://github.com/kenwheeler/slick/    
website how us it                 ->  http://kenwheeler.github.io/slick/
*/
$(document).ready(function(){
  $('.slider__main').slick({
    dots: true,
    infinite: true,
    arrow: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<i class="fa fa-chevron-right">',
    prevArrow: '<i class="fa fa-chevron-left">',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});
// 

/* Scroll Page Back  doc/GitHub      ->  https://github.com/oasan/toTop    
website how us it                 ->  https://www.jqueryscript.net/demo/Scroll-Page-To-Top-jQuery-toTop/
*/
$(document).ready(function(){
  $('.totop').tottTop({
scrollTop: 1000, // The height of the document which will show a button
duration: 1000, // scroll animation duration
scrtollTopBtnDuration: 400 // button show animation duration
});
});
// 

/* Countdown Timer   doc/GitHub      ->  https://github.com/kbwood/countdown 
website how us it                 ->  http://keith-wood.name/countdown.html
*/
$(function () {
  var austDay = new Date();
  austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
  $('#defaultCountdown').countdown({until: austDay});
  $('#year').text(austDay.getFullYear());
});
// 

/* Popover        doc/GitHub      ->  http://gsreddy.in/popover/ 
website how us it              ->  https://github.com/popoverjs/popoverjs
*/
$("#theme-demo").fu_popover({
  content:"Custom theme demo",
  placement:"top",
  themeName:'Theme_red',
  title:'Title'
});
// 

/* Маска для телефона  doc/GitHub      ->  http://digitalbush.com/projects/masked-input-plugin/
website how us it                      ->  https://github.com/digitalBush/jquery.maskedinput
Edit in jquery.js
*/
// 

/* select2  doc/GitHub     ->  https://select2.org/
website how us it          ->  https://github.com/select2/select2
Edit in jquery.js
*/
// 

/* AdaptiveMenu  doc/GitHub     ->  https://www.jqueryscript.net/menu/Left-to-right-Push-Menu-With-jQuery-CSS3.html
website how us it               ->  -
*/
$(document).ready(function() {
  $menuLeft = $('.pushmenu-left');
  $nav_list = $('#nav_list');
  $nav_list.click(function() {
    $(this).toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');
  });
});
// 
/*DropDown -> https://codepen.io/mrblackdevil/pen/eeyRpE
*/
var colors = ['1abc9c', '2c3e50', '2980b9', '7f8c8d', 'f1c40f', 'd35400', '27ae60'];

colors.each(function (color) {
  $$('.color-picker')[0].insert(
    '<div class="square" style="background: #' + color + '"></div>'
    );
});

$$('.color-picker')[0].on('click', '.square', function(event, square) {
  background = square.getStyle('background');
  $$('.custom-dropdown select').each(function (dropdown) {
    dropdown.setStyle({'background' : background});
  });
});
// 
/*Video Background*/
$( document ).ready(function() {
  scaleVideoContainer();
  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');
  $(window).on('resize', function() {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
  });
});
function scaleVideoContainer() {
  var height = $(window).height() + 5;
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height',unitHeight);
}
function initBannerVideoSize(element){
  $(element).each(function(){
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
  });
  scaleBannerVideoSize(element);
}
function scaleBannerVideoSize(element){
  var windowWidth = $(window).width(),
  windowHeight = $(window).height() + 5,
  videoWidth,
  videoHeight;
    // console.log(windowHeight);
    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');
      $(this).width(windowWidth);
      if(windowWidth < 1000){
        videoHeight = windowHeight;
        videoWidth = videoHeight / videoAspectRatio;
        $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        $(this).width(videoWidth).height(videoHeight);
      }
      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }
// 


/*Плагины которые могут быть полезны*/
/* jQuery Dependent Dropdowns Demo    doc/GitHub      ->  https://github.com/shorifali/static-dependent-dropdowns-jquery
website how us it                                     ->  https://shorifali.github.io/static-dependent-dropdowns-jquery/app
Данный плагин вносит зависимость от выбора первого пункта далее открывает другой
*/

/* VideoBackground    doc/GitHub      ->  https://github.com/pupunzi/jquery.mb.YTPlayer
website how us it                     ->  https://pupunzi.com/mb.components/mb.YTPlayer/demo/demo.html
*/


/* Parallax        doc/GitHub      ->  https://github.com/wagerfield/parallax
website how us it                  ->  http://matthew.wagerfield.com/parallax/
*/ 

/* SVG PopUP http://tsumbaluk.in.ua/jquery-svg-popup 
*/

/* css parallax background images       https://www.cssscript.com/pure-css-parallax-background-images/ 
   Tiny Parallax Background Plugin      https://github.com/JB1905/parlx
                                        https://www.jqueryscript.net/demo/Parallax-Background-jQuery-parlx/
                                        */



