// Estat del gamepad al navegador
// Personatge que es mourà
var gamepad = navigator.getGamepads()[0];
var eixos = document.querySelector("#eixos");
var posx = 200;
var posy = 200;
var mov = 5;
console.log(gamepad);

function Gamepad(){
    gamepad = navigator.getGamepads()[0];
    var botons = gamepad.buttons;
    if(botons[0].pressed){
        posx+=mov;
        
    }
}
setInterval("Gamepad()", 50);

