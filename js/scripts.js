$(document).ready(function() {

  // DROPDOWN TOGGLE ONCLICK
  $(".dropdown-list").hide();
  $(".nav-dropdown").click(function(){
    $(this).children(".dropdown-list").slideToggle("fast")
    // Removed .stop method until I know what it does
    // $(this).children(".dropdown-list").stop(true,true).slideToggle("fast")
  });
  $("body").click(function(){
    $(".dropdown-list").fadeOut().addClass(".active");
  });
  $(".nav-dropdown").click(function(e){
    e.stopPropagation();
  });
});