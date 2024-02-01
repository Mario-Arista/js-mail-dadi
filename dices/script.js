// Creo costante per imput del 
// lancio random per l'utente

const userButtonElement = document.getElementById("user-dice")

// Creo costanti per generare numeri random 
// per dadi

// UTENTE
const diceUser = Math.floor(Math.random() * 6) + 1;

// COMPUTER
const diceComputer = Math.floor(Math.random() * 6) + 1;

// Genero costante con OUTPUT

const outputsElement = document.querySelector(".outputs");

// creo output al click dell'input

userButtonElement.addEventListener("click",
    function() {

        // creo nuovo elemento output utente
        const newElement = document.createElement("div");

        // Genero nuovo elemento con append
        outputsElement.append(newElement);

        newElement.innerHTML = diceUser;

        // creo nuovo elemento output computer
        const newTwoElement = document.createElement("div");

        // Genero nuovo elemento con append
        outputsElement.append(newTwoElement);
        
        newTwoElement.innerHTML = diceComputer;


    }
)