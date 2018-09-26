$(document).ready(function() {

  // DROPDOWN TOGGLE ONCLICK
  $(".dropdown-list").hide();
  $(".nav-dropdown").click(function(){
    $(this).children(".dropdown-list").slideToggle("fast")
    // Removed .stop method until I know what it does
    // $(this).children(".dropdown-list").stop(true,true).slideToggle("fast")
  });
  //Hide dropdown if body is clicked
  $("body").click(function(){
    $(".dropdown-list").fadeOut().addClass(".active");
  });
  //Prevent dropdown click from reaching body
  $(".nav-dropdown").click(function(e){
    e.stopPropagation();
  });
});