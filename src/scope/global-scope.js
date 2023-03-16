// DECLARANDO UNA VARIABLE

var a;

// INICIALIZAR UNA VARIABLE

a = "a";

// DECLARAMOS Y ASIGNAMOS

var b = "b";

// REASIGNACIÓN

b = "bb";

// REDECLARACIÓN

var a = "aa";

// GLOBAL SCOPE EJEMPLO

var fruit = "Apple";

function bestFruit() {
  console.log(fruit);
}
bestFruit();

// DECLARANDO UNA VARIABLE GLOBAL SIN DARNOS CUENTA

function countries() {
  country = "Colombia"; // NO SE INICIALIZA LA VARIABLE
  console.log(country);
}
countries();
console.log(country);
