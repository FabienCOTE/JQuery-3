$("#text").keypress(function(e){
  var hWindow = $(window).height()-50;
  var wWindow = $(window).width()-50;
  var top = parseInt($("#block").css("top"));
  var left = parseInt($("#block").css("left"));

  //LEFT 37
  if(e.keyCode == 37) {
    if (left <= 0) {
      $("#block").css("left", wWindow);
    } else {
      $("#block").css("left", "-=10");
    }
  }

  // UP 38
  if(e.keyCode == 38) {
    if (top <= 0) {
      $("#block").css("top", hWindow);
    } else {
      $("#block").css("top", "-=10");
    }
  }

  // RIGTH 39
  if(e.keyCode == 39) {
    if (left >= wWindow) {
      $("#block").css("left", 0);
    } else {
      $("#block").css("left", "+=10");
    }
  }

  // DOWN 40
  if(e.keyCode == 40) {
    if (top >= hWindow) {
      $("#block").css("top", 0);
    } else {
      $("#block").css("top", "+=10");
    }
  }
});
