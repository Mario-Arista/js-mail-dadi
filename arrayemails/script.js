// Aggiungo array con email

const userArrayMails = ["mario@tiscali.it", "giovanni@tiscali.it", "michele@tiscali.it","giovanni@tiscali.it","elisa@tiscali.it", "martina@tiscali.it", "caterina@tiscali.it"];


// Mi creo una costante per Button
const buttonMail = document.getElementById("button-mail");

// Mi creo una costante per Input 
const mailUsers = document.getElementById("mail-user");

// Mi creo una costante output
const containerElement = document.querySelector(".outputs-user");

// Creo un evento al click con dentro un if per capire 
// corrispondenza input utente - elemento array

buttonMail.addEventListener("click",

    function() {
        const newElement = document.createElement("span")
        containerElement.append(newElement);

        if (mailUsers.value != userArrayMails[0, 1, 2, 3, 4, 5, 6]) {
            newElement.innerHTML = `ERRORE, la tua mail non è presente nel database`;
    
        } else {
            newElement.innerHTML = `La tua mail è presente nel database. Per continuare accedi all'area riservata!`;
        }


    }
)