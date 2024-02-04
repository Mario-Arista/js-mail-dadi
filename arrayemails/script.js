// Aggiungo array con email

const userArrayMails = ["mario@tiscali.it", "giovanni@tiscali.it", "michele@tiscali.it","giovanni@tiscali.it","elisa@tiscali.it", "martina@tiscali.it", "caterina@tiscali.it"];

// Mi creo una costante per Button
const buttonMail = document.getElementById("button-mail");

// Mi creo una costante per Input 
const mailUsers = document.getElementById("mail-user");

// Mi creo output
const outputUser = document.querySelector("#result-user");
const hiddenElement = document.querySelector(".to_hide");

// Usare booleana con for con dentro if

buttonMail.addEventListener("click",

    function() {

        
        
        let emailCorretta = false;

        for ( i=0; i < userArrayMails.length; i++) {
            
            if (userArrayMails[i] === mailUsers.value) {
                emailCorretta = true;

                
            }

            if (emailCorretta) {
                hiddenElement.classList.remove("d-none");
                outputUser.innerHTML = "La tua mail è presente!";
                

            } else {
                hiddenElement.classList.remove("d-none");
                outputUser.innerHTML = "La tua mail non è presente!";
                
            }
             
        }
       
    }

)

