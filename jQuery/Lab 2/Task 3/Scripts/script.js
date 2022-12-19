$(function () {
  $("#buggs").draggable();
  $("#black").droppable({
    drop: function () {
      $("#buggs").hide("explode", 2000);
    },
  });
});
