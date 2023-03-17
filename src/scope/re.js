// DECLARAMOS E INICIALIZAMOS LA VARIABLE

var firstName; // TIENE VALOR UNDEFINED PREDETERMINADO
firstName = "Oscar";
console.log(firstName);

// HACEMOS LA VARIABLE COMPLETA Y LUEGO LA REASIGNAMOS

var lastName = "David"; // DECLARAR E INICIALIZAR
lastName = "Ana"; // REASIGNAR
console.log(lastName); // RESULTADO = Ana

// CREAMOS LA VARIABLE, Y LUEGO LA REDECLARAMOS

var secondName = "David"; // DECLARAR E INICIALIZAR
var secondName = "Luis"; // REDECLARAMOS
console.log(secondName); // RESULTADO = Luis

// CON LET Y CONST NO SE PUEDE HACER ESTO

// LET SOLO DEJA REASIGNAR

let fruit = "Apple";
fruit = "Kiwi"; // REAGINAR SÍ DEJA EN LET
console.log(fruit);

let fruit1 = "Banana"; // REDECLARAR NO DEJA
console.log(fruit);

// CONST NO DEJA NADA

const fruit2 = "Apple";
fruit = "Kiwi"; // REAGINAR NO DEJA
console.log(fruit);

const fruit3 = "Banana"; // REDECLARAR NO DEJA
console.log(fruit);

// AGREGUÉ 1-2-3 ALFINAL PARA QUE NO DÉ EROR
