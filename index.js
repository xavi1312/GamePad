window.addEventListener("gamepadconnected", function(e) {
    document.write("Nom: "+ e.gamepad.id +"<br>Connectat: "+ e.gamepad.connected +"<br>Botons: "+  e.gamepad.buttons.length +
    "<br>Numero d'eixos: "+ e.gamepad.axes.length);
  });
// Estat del gamepad al navegador
// Personatge que es mourà