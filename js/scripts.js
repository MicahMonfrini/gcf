$(document).ready(function() {

  // DROPDOWN TOGGLE ONCLICK
  $(".dropdown-list").hide();
  $(".nav-dropdown").click(function(){
      $(this).children(".dropdown-list").stop(true,true).slideToggle("fast"),
      $(this).toggleClass("dropdown-active");
  });

});