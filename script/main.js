window.onload = () => {
  document.querySelector('#submit-front').addEventListener('click', (e) => {
    e.preventDefault();
    let optionValue = document.querySelector('#front-input').value;
    
    let dataValue = document.querySelector('#topics option[value="' + optionValue + '"]').dataset.value;

    if(dataValue)    
      window.location.href = "NEW-MDG/" + dataValue;
  });
}