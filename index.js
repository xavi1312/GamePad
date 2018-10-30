

// Estat del gamepad al navegador
var mando = navigator.getGamepads()[0];
var info = document.getElementById("info-gamepad");
var text = document.createTextNode("Nom: "+ mando.id +" Botons: "+mando.buttons.length + " Numero eixos: "
+ mando.axes.length);
info.appendChild(text);
// Personatge que es mourà
var x = 200;
var y = 200;
var mou = 5;
function gamePad(){
    mando = navigator.getGamepads()[0];
    var botons = mando.buttons;
}
setInterval(gamePad(),50);