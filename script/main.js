
//Oppretter lenke til de ulike politiske temaene i choice-box
window.onload = () => {
  document.querySelector('#submit-front').addEventListener('click', (e) => {
    e.preventDefault();
    let optionValue = document.querySelector('#front-input').value;
    
    let dataValue = document.querySelector('#topics option[value="' + optionValue + '"]').dataset.value;

    if(dataValue)    
      window.location.href = dataValue;
  });
}

const cb = document.getElementById("cb");
const label = document.getElementById("burger-frontpage");


const checkIt = (e) => {
  if (e.key === "Enter") {   
    !cb.checked ? cb.checked = true : cb.checked = false;
  }
}

label.addEventListener("keydown", checkIt);


