$(document).ready(function() {

  // DROPDOWN TOGGLE ONCLICK
  $(".dropdown-list").hide();
  $(".nav-dropdown").click(function(){
      $(this).children(".dropdown-list").stop(true,true).slideToggle("fast")
  });
  // $("body").click(function(){
  //   $(".nav-dropdown").fadeOut().removeClass(".dropdown-list");
  // });
});