function greeting() {
  let username = ["Cristian", "Oscar", "Pedro"];

  function displayUserName() {
    return `Helo ${username[0]}`;
  }
  return displayUserName();
}
greeting();
console.log(greeting());
