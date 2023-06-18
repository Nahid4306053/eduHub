"use strict";

$(document).ready(function () {
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $("#navbars").addClass(" fixed-top  shadow bg-light");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#navbars").removeClass(" fixed-top shadow bg-light ");
      }
    });
  });
  $("#manue").click(function () {
    var bo = $("#manus").html();
    $("#mnus-clone").html(bo);
    $("#mobile-header").show();
  });
  $("#close").click(function () {
    $("#mobile-header").hide();
    var got = $("#mnus-clone").html();
    $(got).remove();
  });
  $('#project').counterUp({
    delay: 10,
    time: 10000
  });
  $('#project-1').counterUp({
    delay: 10,
    time: 1000
  });
  $('.counters').counterUp({
    delay: 10,
    time: 2000
  });
  $('.countersi').counterUp({
    delay: 10,
    time: 2000
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });
  var owl = $('.project-blog');
  owl.owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
  AOS.init();
});