(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('.navbar-toggler').click(function() {
      $('.navbar .navbar-nav').slideToggle();
    });
    $('.search a').click(function() {
      $('.top-search').slideDown();
      $('.navbar-toggler').css('top','90px');
    });
    // Hamburger to X toggle
     $('.navbar-toggler').on('click', function() {
      this.toggle('active');
    });
     $('.close-search').on('click', function() {
       $('.top-search').slideUp();
       $('.navbar-toggler').css('top','22px');
    });
    // testimonials slider
    /*
    (function autoSlider(){
      $('.slider .active').each(function(){
        if(!$(this).is(':last-child')){
          $(this).delay(3000).fadeOut(1000, function() {
            $(this).removeClass('active').next().addClass('active').fadeIn();
            autoSlider();
          });
        }
      })
     }());*/
     (function autoSlider(){
      var sliderWidth = $('.slider').width();
      $('.slider .active').each(function(){
        if(!$(this).is(':last-child')){
          $(this).delay(3000).animate({left :sliderWidth},2000,function(){
            $(this).removeClass('active').next().addClass('active').animate({left :sliderWidth},2000);
            autoSlider();
          });
        }
      });

     }());

  }); // end DOM ready

})(jQuery); // end jQuery
/*
  ========================
      STICKY NAVBAR
  =======================
*/
     window.onscroll = function() {myFunction()};
     var navbar = document.getElementById("mainnav");
     var sticky = navbar.offsetTop;
     function myFunction() {
      if (window.pageYOffset > sticky){
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
/*
  ========================
      SCROLL TO TOP
  =======================
*/
var myBtn = document.getElementById('totop');
window.onscroll=function(){
  if(window.pageYOffset>=400){
    myBtn.style.display='block';

  }else{
    myBtn.style.display='none';
  }
}
 myBtn.onclick = function(){
    window.scrollTo(0,0);
 }
  
