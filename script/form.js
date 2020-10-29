const checkInput = (evt) => {
    
    const name = document.getElementById("name").value;
    
    const labelName = document.getElementById("name-msg");
    console.log(labelName);

    const content = (name.length>0) ? true : false;
    
    labelName.innerText = "";

    if (content) {
        console.log("har innhold");
        labelName.innerText = "";
    } else {
        console.log("mangler innhold");
        labelName.innerText = "Dette feltet må fylles ut";
       
    }

    //while (!content) {
        //console.log("Hei")
    //};

  }
  
  checkInput();
  
  const button = document.getElementById("submit");
  button.addEventListener("click", checkInput);