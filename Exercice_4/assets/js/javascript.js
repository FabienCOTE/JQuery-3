$(function() {
  //Au click on change de couleur qui correspond
  $("#btn1").click(function() {
    var height = $("#rectangle").height();
    if (height > 100) {
      $("#rectangle").css("height", "10px");
    } else {
      $("#rectangle").css("height", "+=10px");
    }
  });

  $("#btn2").click(function() {
    $("#rectangle").css("background-color", "green");
  });

  $("#btn3").click(function() {
    $("#rectangle").css("background-color", "");
  });

  $("#btn4").click(function() {
    $("#rectangle").hide();
  });

  $("#btn5").click(function() {
    $("#rectangle").show();
  });
});
