// UNA ALCANCIA DE MONEDAS USANDO UN CLOSURE

function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) { // ABRIMOS CLOSURE
    saveCoins += coins; // EL CODIGO ENTIENDE Y SUMA
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox(); // METEMOS TODO EN UNA CONST POR ORDERNAR

myMoneyBox(5); // VAMOS METIENDO VALORES
myMoneyBox(25);
myMoneyBox(20); // SE SUMA TODO AUTOMATICAMENTE

// AÑADIENDO A ALGUIEN MAS

const moneyBoxAna = moneyBox();

moneyBoxAna(55);
moneyBoxAna(60);
