// Aggiungo array con email

const userArrayMails = ["mario@tiscali.it", "giovanni@tiscali.it", "michele@tiscali.it","giovanni@tiscali.it","elisa@tiscali.it", "martina@tiscali.it", "caterina@tiscali.it"];

// Mi creo una costante per Button
const buttonMail = document.getElementById("button-mail");

// Mi creo una costante per Input 
const mailUsers = document.getElementById("mail-user");

// Mi creo una costante output
const containerElement = document.querySelector(".outputs-user");

// Usare booleana con for con dentro if

let emailCorretta =false;

buttonMail.addEventListener("click",

    function() {

        const newElement = document.createElement("span")
        containerElement.append(newElement);

        for ( i=0; i < userArrayMails.length; i++) {
            
            if (userArrayMails[i] == mailUsers.value) {
                let emailCorretta = true;

            }
             
        }

        if (emailCorretta) {
            newElement.innerHTML = "Ci sono";
        } else {
            newElement.innerHTML = "Ci Faccio";
        }
       

    }
)

