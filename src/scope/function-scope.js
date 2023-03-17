// SE CREA LA VARIABLE DENTRO DE LA FUNCIÓN

function greeting() {
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hello, ${userName}`);
  }
}
greeting();

// DA ERROR AL CORRERLO GLOBAL

console.log(userName);
