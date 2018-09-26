$(document).ready(function() {

  // DROPDOWN TOGGLE ONCLICK
  $(".nav-dropdown").click(function(){
    $(this).children(".dropdown-list").slideToggle("fast")
    // Removed .stop method until I know what it does
    // $(this).children(".dropdown-list").stop(true,true).slideToggle("fast")
  });
  //Hide dropdown if body is clicked
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.nav-dropdown').length) {
      $(".dropdown-list").fadeOut()
    }
  });
});