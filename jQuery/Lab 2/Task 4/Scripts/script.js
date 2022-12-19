$(function () {
  $("#bands").on("change", function () {
    var chosen = this.value;
    $.ajax({
      url: "../Data/rockbands.json",
    }).done(function (data) {
      $("#artists").empty();
      for (var i = 0; i < data[chosen].length; i++) {
        $("#artists").append(
          $(
            "<option value='" +
              data[chosen][i].name +
              "'>" +
              data[chosen][i].name +
              "</option>"
          )
        );
      }
      $("#artists").on("change", function () {
        var artist = this.value;
        $.ajax({
          url: "../Data/rockbands.json",
        }).done(function (data) {
          for (var i = 0; i < data[chosen].length; i++) {
            if (data[chosen][i].name == artist) {
              window.open(data[chosen][i].value);
            }
          }
        });
      });
    });
  });
});
