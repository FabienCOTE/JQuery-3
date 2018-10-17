//Lance la fonction une fois que la page HTML est chargée
$(function() {
  //Fonction incrémentation plus ou moins
  $("#more").click(function() {
    var x = $('#number').val();
    x++;
    $("#number").val(x);
  });

  $("#less").click(function() {
    var x = $('#number').val();
    x--;
    $("#number").val(x);
  });
});
