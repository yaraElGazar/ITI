$(function () {
  // Hide all cards
  $("#about").hide();
  $("#gallery").hide();
  $("ul").hide();
  $("#complain").hide();
  $("#complain-answers").hide();

  // On click About button
  $("#btn1").click(function () {
    $("#about").show();
    $("#gallery").hide();
    $("#services").hide();
    $("#complain").hide();
  });

  // On click Gallery button
  $("#btn2").click(function () {
    $("#about").hide();
    $("#gallery").show();
    $("#services").hide();
    $("#complain").hide();
  });
  var down = false;
  // On click Services button
  $("#btn3").click(function () {
    $("#about").hide();
    $("#gallery").hide();

    if (down === true) {
      $("ul").slideUp(500, "swing", function () {
        down = false;
      });
    } else {
      $("#services").show();
      $("ul").slideDown(500, "swing", function () {
        down = true;
      });
    }
    $("#complain").hide();
  });

  // On click Complain button
  $("#btn4").click(function () {
    $("#about").hide();
    $("#gallery").hide();
    $("#services").hide();
    $("#complain").show();
  });

  // Slider
  var picNumber = 1;
  $("#right").click(function () {
    if (picNumber < 7) {
      picNumber++;
      $("#picture").attr("src", "../Images/" + picNumber + ".jpg");
    }
  });
  $("#left").click(function () {
    if (picNumber > 1) {
      picNumber--;
      $("#picture").attr("src", "../Images/" + picNumber + ".jpg");
    }
  });

  // Send complain
  $("#sendBtn").click(function () {
    var userName = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var complain = $("#complain-area").val();
    $("#complain").hide();
    $("#complain-answers").show();
    $("#complain2").text(complain);
    $("#name2").text(userName);
    $("#email2").text(email);
    $("#phone2").text(phone);
  });

  $("#backbtn").click(function () {
    $("#complain-answers").hide();
    $("#complain").show();
  });
});
