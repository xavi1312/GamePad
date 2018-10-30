// Estat del gamepad al navegador
var mando = navigator.getGamepads()[0];
var info = document.getElementById("info-gamepad");
var text = document.createTextNode(
  "Nom: " +
    mando.id +
    " Botons: " +
    mando.buttons.length +
    " Numero eixos: " +
    mando.axes.length
);
info.appendChild(text);
// Personatge que es mourà
var x = 200;
var y = 200;
var mou = 5;

var element = document.getElementById("arale");

var w_original = element.clientWidth;
var h_original = element.clientHeight;

setInterval("gamePad()", 50);

function gamePad() {
  mando = navigator.getGamepads()[0];
  var botons = mando.buttons;
  //Moure
  if (botons[13].pressed == true) {
    x += mou;
    element.style.top = x + "px";
  }
  if (botons[12].pressed == true) {
    x -= mou;
    element.style.top = x + "px";
  }
  if (botons[15].pressed == true) {
    y += mou;
    element.style.left = y + "px";
  }
  if (botons[14].pressed == true) {
    y -= mou;
    element.style.left = y + "px";
  }
  midesImatge(botons);
}

function midesImatge(botons) {
  //Fer imatge més gran
  //Fer imatge més petita
}
