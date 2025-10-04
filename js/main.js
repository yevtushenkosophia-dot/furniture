//*****************Tabs*********************// 
$(function(){

$('#menu-tabs li').click(function(){
  var thisClass = this.className.slice(0,2);
  $('div.t1').hide();
  $('div.t2').hide();
  $('div.t3').hide();
  $('div.' + thisClass).fadeIn(500);
  $('#menu-tabs li').removeClass('active');
  $(this).addClass('active');
  return false;
});
});

//***********Toggle-button****///////////////
 $(document).ready(function(){
  $('#nav-icon1,#nav-icon2').click(function(){
    $(this).toggleClass('open');
  });
});

 $(document).ready(function() {

  var $navIcon = $('#nav-icon1'),
      $menuWrap = $('.menu-wrap');
     
  $navIcon.on('click', function() {
    $(this).toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');
  });

  var $navIcon2 = $('#nav-icon2'),
      $basketRespos = $('.basket-respons');
  $navIcon2.on('click', function() {
    $(this).toggleClass('open');
    $basketRespos.toggleClass('respons-open');
  });
  var $navIcon2 = $('#nav-icon2'),
      $banner = $('.bxslider');
  $navIcon2.on('click', function() {
    $(this).toggleClass('open');
    $banner.toggleClass('active');
  });
  var $button = $('.button_text'),
      $text = $('.main-content');
  $button.click(function() {
    $(this).toggleClass('show');
    $text.slideToggle('slow');
  });  
   var $button2 = $('.button_page2'),
       $list2 = $('.sublist');
  $button2.click(function() {
    $(this).toggleClass('show');
    $list2.slideToggle('slow');
  });
  var $button3 = $('.button_page3'),
       $list5 = $('.search_page_five');
  $button3.click(function() {
    $(this).toggleClass('show');
    $list5.slideToggle('slow');
  });      
  });


//**************Bxslider*****************//
 $(function(){
  jQuery('.bxslider').bxSlider({
    pager: true,
    nextText: '', 
    prevText: '',
    slideMargin: 6
});
    $("#clickme").click(function () {
      $(".underlist").slideToggle("slow");
    });
});

    //***********Opacity for slider when basket open****************//

  



 