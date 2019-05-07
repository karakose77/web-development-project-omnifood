$(document).ready(function() {

  // STICKY NAVIGATION BAR
  $(".js-section-features").waypoint(function(direction) {
    if (direction === "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  }, {
    offset: '15%'
  });

  // ANIMATIONS ON SCROLL
  $(".js-waypoint-1").waypoint(function(directions) {
    $(".js-waypoint-1").addClass("animated fadeIn");
  }, {
    offset: "50%"
  });

  $(".js-waypoint-2").waypoint(function(directions) {
    $(".js-waypoint-2").addClass("animated fadeInUp");
  }, {
    offset: "50%"
  });

  $(".js-waypoint-3").waypoint(function(directions) {
    $(".js-waypoint-3").addClass("animated fadeIn");
  }, {
    offset: "50%"
  });

  $(".js-waypoint-4").waypoint(function(directions) {
    $(".js-waypoint-4").addClass("animated pulse");
  }, {
    offset: "50%"
  });

  // MOBILE NAVIGATION
  $(".js-nav-icon").click(function() {
    var nav = $(".js-main-nav");
    var icon = $(".js-nav-icon i");
    nav.slideToggle(200);

    if (icon.hasClass("ion-md-menu")) {
      icon.addClass("ion-md-close");
      icon.removeClass("ion-md-menu");
    } else {
      icon.addClass("ion-md-menu");
      icon.removeClass("ion-md-close");
    }
  });

  // MAPS
  var map = new GMaps({
    div: '.map',
    lat: 39.9272222,
    lng: 32.99,
    zoom: 12
  });

  map.addMarker({
    lat: 39.9272222,
    lng: 32.8644444,
    title: 'Ankara',
    infoWindow: {
      content: '<p>Our Ankara HQ</p>'
    }
  });

});


// SCROLL ON BUTTONS
// $(".js-scroll-to-plans").click(function() {
//   $("html, body").animate({
//     scrollTop: $(".js-scroll-to-plans").offset().top
//   }, 1000);
// });
