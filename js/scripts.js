$(document).ready(function() {

  // DROPDOWN TOGGLE ONCLICK
  $(".clickSlide ul").hide();
  $(".clickSlide").click(function(){
      $(this).children("ul").stop(true,true).slideToggle("fast"),
      $(this).toggleClass("dropdown-active");
  });

});