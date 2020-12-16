//Sjekker om de obligatoriske feltene er fyllt ut, og gir feilmelding hvis de ikke er det. 
const checkInput = () => {
    
    const name = document.getElementById("name").value;
    const labelName = document.getElementById("name-msg");

    const mail = document.getElementById("mail").value;
    const labelMail = document.getElementById("mail-msg");

    const isContent = (name.length > 0) ? true : false;
    const isContentMail = (mail.length > 0) ? true : false;

    isContent ? labelName.innerText = "" : labelName.innerText = "Du må fylle ut med fullt navn";
    isContentMail ? labelMail.innerText = "" : labelMail.innerText = "Du må fylle ut hele epostadressen din";

  }
  
const button = document.getElementById("submit");
button.addEventListener("click", checkInput);