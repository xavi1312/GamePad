// Estat del gamepad al navegador
var mando = navigator.getGamepads()[0];
var eixos = mando.axes;
var info = document.getElementById("info-gamepad");
//var text = document.createTextNode("Nom: "+ mando.id +" Botons: "+mando.buttons.length + " Numero eixos: "
//+ eixos.length);
//info.appendChild(text);
// Personatge que es mourà
var x = 200;
var y = 200;
var mou = 5;
console.log(mando);
var bola = document.getElementById("bola");

function gamePad(){
    mando = navigator.getGamepads()[0];
    var botons = mando.buttons;
    var eix = mando.axes;

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


    if(eix[0] > 0.5 || eix[2] > 0.5){ //derecha
        if(x < window.innerWidth -200){
            x = x + mou;
            bola.style.left = x + "px";
        }
    }
    if(eix[0] < -0.5 || eix[2] < -0.5){//izquierda
        if(x > 0){
            x = x - mou;
            bola.style.left = x + "px";
        }
    }
    if(eix[1] > 0.5 || eix[3] > 0.5){//abajo
        if(y < 400){
        y = y + mou;
        bola.style.top = y + "px";
        }
    }
    if(eix[1] < -0.5 || eix[3] < -0.5){//arriba
        if(y > 0){
        y = y - mou;
        bola.style.top = y + "px";
        }
    }
    var amplada = bola.innerWidth;
    
    if(botons[0].pressed){
        amplada+=15+"px";
    }
    if(botons[1].pressed){
        alert("Fem petit");
    }


}
setInterval("gamePad()",50);
