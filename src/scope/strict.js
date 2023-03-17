// SE USA EL COMANDO USE STRING EN STRING

// OBLIGA EL CODIGO A SER ESTRICTO

"use strict";
pi = 3.1416; // NO SE DECLARA VARIABLE
console.log(pi); // DA ERROR

// MISMO EJEMPLO EN FUNCION

function myFunction() {
  "use strict";
  return (pi = 3.1416);
}
console.log(myFunction);
