$(function () {
  $("#car").animate({ left: "1000px" }, 3000, "swing");
  var myInterval = setInterval(function () {
    $("#element").text(
      '<img src = "12.gif" style="left: "' + $("#car")[0].style.left + '"/>'
    );
  }, 100);
  setTimeout(function () {
    clearInterval(myInterval);
  }, 3100);
});
