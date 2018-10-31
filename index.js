// Estat del gamepad al navegador
var mando = navigator.getGamepads()[0];
/*var eixos = mando.axes;
var info = document.getElementById("info-gamepad");
var text = document.createTextNode(
  "Nom: " +
    mando.id +
    " Botons: " +
    mando.buttons.length +
    " Numero eixos: " +
    eixos.length
);
info.appendChild(text);*/
// Personatge que es mourà
var x = 200;
var y = 200;
var mou = 5;

var arale = document.getElementById("arale");
var taulell = document.getElementById("taulell");

var taulell_Left;
var taulell_Right;
var taulell_Top;
var taulell_Bottom;
posTaulell();

function gamePad() {
  mando = navigator.getGamepads()[0];
  var botons = mando.buttons;
  var eix = mando.axes;
  if (botons[13].pressed) {
    x += mou;
    arale.style.top = x + "px";
  }
  if (botons[12].pressed) {
    x -= mou;
    arale.style.top = x + "px";
  }
  if (botons[15].pressed) {
    y += mou;
    arale.style.left = y + "px";
  }
  if (botons[14].pressed) {
    y -= mou;
    arale.style.left = y + "px";
  }

  if (eix[0] > 0.5) {
    //derecha
    if (x < taulell_Right) {
      x = x + mou;
      arale.style.left = x + "px";
    }
  }
  if (eix[0] < -0.5) {
    //izquierda
    if (x > taulell_Left) {
      x = x - mou;
      arale.style.left = x + "px";
    }
  }
  if (eix[1] > 0.5) {
    //abajo
    if (y < taulell_Bottom) {
      y = y + mou;
      arale.style.top = y + "px";
    }
  }
  if (eix[1] < -0.5) {
    //arriba
    if (y > taulell_Top) {
      y = y - mou;
      arale.style.top = y + "px";
    }
  }
}
function midaArale() {
  var btn_Creixer = mando.buttons[3];
  var btn_Decreixer = mando.buttons[0];

  if (btn_Creixer.pressed) {
    if (arale.clientWidth < 100) {
      arale.style.setProperty("--wArale", arale.clientWidth + 5 + "px");
      arale.style.setProperty(
        "--hArale",
        arale.clientWidth + (arale.clientWidth * 32) / 100 + "px"
      );
    }
  }

  if (btn_Decreixer.pressed) {
    if (arale.clientWidth > 70) {
      arale.style.setProperty("--wArale", arale.clientWidth - 5 + "px");
      arale.style.setProperty(
        "--hArale",
        arale.clientWidth + (arale.clientWidth * 32) / 100 + "px"
      );
    }
  }

  posTaulell();
}
function posTaulell() {
  var border = 32;
  taulell_Left = taulell.offsetLeft + border;
  taulell_Right = taulell.clientWidth + taulell_Left - arale.clientWidth;
  taulell_Top = taulell.offsetTop + border;
  taulell_Bottom = taulell.clientHeight + taulell_Top - arale.clientHeight;
}
setInterval("gamePad()", 50);
setInterval("midaArale()", 50);
