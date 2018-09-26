$(document).ready(function() {

  // DROPDOWN TOGGLE ONCLICK

  // .active is set to display: block. Hidden by default
  $(".active").hide();
  // Click handler
  $(".nav-dropdown").click(function() {
    // Check clicked element for status of .active
    // If .active is visible on clicked element; fade out
    if ($(this).find(".active").is(":visible")) {
      $(".active").fadeOut()
    // If .active is not visible on clicked element...
    } else {
      // all visible .active classes fade out
      $(".active").fadeOut();
      // fade in .active on clicked element
      $(this).find(".active").fadeIn();
    }
  });

  //Hide dropdown if body is clicked
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.nav-dropdown').length) {
      $(".dropdown-list").fadeOut()
    }
  });
});