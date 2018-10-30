

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
console.log(mando);
var bola = document.getElementById("bola");
function gamePad(){
    mando = navigator.getGamepads()[0];
    var botons = mando.buttons;
    if(botons[13].pressed == true){
        x +=mou;
        bola.style.top = x+"px";
    }
    if(botons[12].pressed == true){
        x -= mou;
        bola.style.top = x+"px";
    }
    if(botons[15].pressed == true){
        y += mou;
        bola.style.left = y+"px";
    }
    if(botons[14].pressed == true){
        y -= mou;
        bola.style.left = y+"px";
    }
}
setInterval("gamePad()",50);
