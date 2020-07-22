$("#welcome-link").click(function () {
  $(".welcome-text").addClass("fade");
  setTimeout(function () {
    $(".welcome-text").removeClass("fade");
  }, 1000);
});

$("#work-link").click(function () {
  $("#work").addClass("fade");
  setTimeout(function () {
    $("#work").removeClass("fade");
  }, 1000);
});

$("#about-link").click(function () {
  $("#about").addClass("fade");
  setTimeout(function () {
    $("#about").removeClass("fade");
  }, 1000);
});

$("#skills-link").click(function () {
  $("#skills").addClass("fade");
  setTimeout(function () {
    $("#skills").removeClass("fade");
  }, 1000);
});

$("#contact-link").click(function () {
  $("#contact").addClass("fade");
  setTimeout(function () {
    $("#contact").removeClass("fade");
  }, 1000);
});
