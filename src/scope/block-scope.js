// BLOCK SCOPE ES USAR VARIABLES SOLAMENTE DENTRO DE {}

function fruits() {
  if (true) {
    var fruit1 = "Apple"; // FUNCTION SCOPE
    let fruit2 = "Kiwi"; // BLOCK SCOPE
    const fruit3 = "Banana"; // BLOCK SCOPE
  }
  console.log(fruit1); // FUNCIONA
  console.log(fruit2); // NO SIRVE
  console.log(fruit3); // NO SIRVE
}
fruits();

// FORMA DE LLAMAR ESA FUNCION (ES MEJOR NO USAR VAR NUNCA)

function fruits() {
  if (true) {
    var fruit1 = "Apple";
    let fruit2 = "Kiwi";
    const fruit3 = "Banana";

    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}
fruits();
