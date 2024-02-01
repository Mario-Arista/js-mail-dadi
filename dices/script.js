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
const showtitleElement = document.querySelector("#show-after");
const showtitle2Element = document.querySelector("#show-after-comp");


// creo output al click dell'input

userButtonElement.addEventListener("click",
    function() {

        // Stampo lancio dado utente
        numberUserElement.innerHTML = diceUser;

        // Stampo lancio dado utente
        numberComputerElement.innerHTML = diceComputer;

        showtitleElement.className = "d-block fs-6";
        showtitle2Element.className = "d-block fs-6";

        // messaggio diverso se utente vince, perde pareggia

        if (diceUser === diceComputer) {

            messageUserElement.innerHTML = `Il Computer ha lanciato ${diceComputer} e tu anche. PAREGGIO! La consideri una mezza vittoria o una mezza sconfitta?`;
        } else if (diceUser > diceComputer) {

            messageUserElement.innerHTML = `Il Computer ha lanciato ${diceComputer} e tu ${diceUser}. Hai VINTO 1 milioni di dollari, campione!`;
        } else {

            messageUserElement.innerHTML = `Il Computer ha lanciato ${diceComputer} e tu ${diceUser}. Hai PERSO 1 milioni di dollari!`;
        }

    }
)