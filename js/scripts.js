$(document).ready(function () {
  $("#q1").click(function () {
    $("#q1 .answer").toggle();
    $("#q1 .question").toggle();
    $('.card#q1').addClass("text-white bg-success");
  });
  $(".q2").click(function () {
    $(".q2 .answer").toggle();
    $(".q2 .question").toggle();
  });
  $(".q3").click(function () {
    $(".q3 .answer").toggle();
    $(".q3 .question").toggle();
  });
  $(".q4").click(function () {
    $(".q4 .answer").toggle();
    $(".q4 .question").toggle();
  });
  $(".q5").click(function () {
    $(".q5 .answer").toggle();
    $(".q5 .question").toggle();
  });
  $(".q6").click(function () {
    $(".q6 .answer").toggle();
    $(".q6 .question").toggle();
  });
});
