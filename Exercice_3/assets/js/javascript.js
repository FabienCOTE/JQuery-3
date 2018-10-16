//Création des variables
var correct = Math.floor(Math.random()*100);
var regexNumber = /^[0-9]+$/;
var count = 0;


//Si on appui sur la touche entrée dans le formulaire faire la fonction "result"
$("form").keypress(function(e){
  if(e.which == 13) {
    e.preventDefault()
    result();
  }
});

//Si on appui sur le bouton faire la fonction "result"
$("#button").click(result);

//fonction result
function result() {
  var x = $("#number").val();
  //Si la valeur correspond à la regex
  if (regexNumber.test(x)) {
    if (x > 100) {
      alert("Merci de relire l'énoncé de l'exercice\n\n" + x + " est plus grand que 100 !\n\nL'essai n'est pas compté")
    } else if (x == correct) {
      count++;
      alert("Bonne réponse !\n\nLa réponse est bien : " + x + "\n\nNombre d'essai : " + count);
      count = 0;
    } else if (x < correct) {
      count++;
      alert("La bonne réponse est plus grande que " + x + "\n\nNombre d'essai : " + count);
    } else {
      count++;
      alert("La bonne réponse est moins grande que " + x + "\n\nNombre d'essai : " + count);
    }
  } else {
    alert("Merci de relire l'énoncé de l'exercice\n\nSeulement les nombres possitifs sont acceptés !\n\nL'essai n'est pas compté");
  }
};
