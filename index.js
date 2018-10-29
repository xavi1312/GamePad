// Estat del gamepad al navegador
window.addEventListener("gamepadconnected", function(e) {
    document.write("Nom: "+ e.gamepad.id +"<br>Connectat: "+ e.gamepad.connected +"<br>Botons: "+  e.gamepad.buttons.length +
    "<br>Numero d'eixos: "+ e.gamepad.axes.length);
  });
  
// Personatge que es mourà
