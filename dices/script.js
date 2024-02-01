// Creo costante per imput del 
// lancio random per l'utente

const userDiceRandomElement = document.getElementById("user-dice")

// Creo costanti per generare numeri random 
// per dadi

// UTENTE
const diceUser = Math.floor(Math.random() * 6) + 1;
console.log(diceUser);

// COMPUTER
const diceComputer = Math.floor(Math.random() * 6) + 1;
console.log(diceComputer);
