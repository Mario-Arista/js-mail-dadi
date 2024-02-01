// Creo costante per imput del 
// lancio random per l'utente

const userButtonElement = document.getElementById("user-dice")

// Creo costanti per generare numeri random 
// per dadi

// UTENTE
const diceUser = Math.floor(Math.random() * 6) + 1;

// COMPUTER
const diceComputer = Math.floor(Math.random() * 6) + 1;

// Genero costante con OUTPUTS

const numberUserElement = document.querySelector("#result-user");
const numberComputerElement = document.querySelector("#result-computer");
const messageUserElement = document.querySelector("#message-user");


// creo output al click dell'input

userButtonElement.addEventListener("click",
    function() {

        // Stampo lancio dado utente
        numberUserElement.innerHTML = diceUser;

        // Stampo lancio dado utente
        numberComputerElement.innerHTML = diceComputer

        
    }
)