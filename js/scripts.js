$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background").t;
    $("body").addClass("text-white");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
    $("body").addClass("text-black");
  });

  $("span").click(function() {
    $(this).addClass("yellow-background");
    $(this).addClass("outer-box");
  });

});
