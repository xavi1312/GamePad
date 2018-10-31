// Estat del gamepad al navegador
var mando = navigator.getGamepads()[0];
var eixos = mando.axes;
  // informació gamepad es mostra per consola
console.log("Nom: " +
mando.id +
" Botons: " +
mando.buttons.length +
" Numero eixos: " +
eixos.length)

// Posicio del personatge
var x = 0;
var y = 0;
// px que es desplasarà per cada moviment
var mou = 5;

var arale = document.getElementById("arale");
var taulell = document.getElementById("taulell");

// posicio del taulell
var taulell_Left;
var taulell_Right;
var taulell_Top;
var taulell_Bottom;
posTaulell();

function gamePad() {
  mando = navigator.getGamepads()[0];
  var botons = mando.buttons;
  var eix = mando.axes;

  // botons de la craueta ( no comproba que no sorti dels limits)
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

  //  moviment joystick (comprova que no passi dels limits)
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
  // 
  var btn_Creixer = mando.buttons[3];
  var btn_Decreixer = mando.buttons[0];

  if (btn_Creixer.pressed) {
    // mida màxima de l'arale
    if (arale.clientWidth < 100) {
      // modificacio de les variables css
      arale.style.setProperty("--wArale", arale.clientWidth + 5 + "px");
      arale.style.setProperty(
        "--hArale",
        arale.clientWidth + (arale.clientWidth * 32) / 100 + "px"
      );
    }
  }

  if (btn_Decreixer.pressed) {
    // mida mínima
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

// els límits que pot arribar l'arale
function posTaulell() {
  var border = 32;
  taulell_Left = taulell.offsetLeft + border;
  taulell_Right = taulell.clientWidth + taulell_Left - arale.clientWidth;
  taulell_Top = taulell.offsetTop + border;
  taulell_Bottom = taulell.clientHeight + taulell_Top - arale.clientHeight;
}
setInterval("gamePad()", 50);
setInterval("midaArale()", 50);
