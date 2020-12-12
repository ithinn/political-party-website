const checkInput = (evt) => {
    
    const name = document.getElementById("name").value;
    const labelName = document.getElementById("name-msg");
    console.log(labelName);

    const mail = document.getElementById("mail").value;
    const labelMail = document.getElementById("mail-msg");

    const isContent = (name.length>0) ? true : false;
    const isContentMail = (mail.length>0) ? true : false;

    // labelName.innerText = "";
    // labelMail.innerText = "";

    isContent ? labelName.innerText = "" : labelName.innerText = "Du må fylle ut med fullt navn";
    isContentMail ? labelMail.innerText = "" : labelMail.innerText = "Du må fylle ut hele epostadressen din";

    // if (content) {
    //     console.log("har innhold");
    //     labelName.innerText = "";
    // } else {
    //     console.log("mangler innhold");
    //     labelName.innerText = "Dette feltet må fylles ut";
       
    // }

  }
  
 
  
  const button = document.getElementById("submit");
  button.addEventListener("click", checkInput);