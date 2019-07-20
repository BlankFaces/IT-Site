$(document).ready(function () {
  $("#ham").click(function () {
    $(this).toggleClass("open");
    $(".sidenav").toggleClass("show");
    $(".overlaySN").toggleClass("show");
  });

  $("#hamHidden").click(function () {
    document.getElementById("ham").click();
  });

  $(".overlaySN").click(function () {
    $("overlaySN").toggleClass("show");
    document.getElementById("ham").click();
  });
});

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});