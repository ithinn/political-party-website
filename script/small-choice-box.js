window.onload = () => {
  document.querySelector('#submit-underpage').addEventListener('click', (e) => {
    e.preventDefault();
    let optionValue = document.querySelector('#underpage-input').value;
    
    let dataValue = document.querySelector('#topics option[value="' + optionValue + '"]').dataset.value;

    if(dataValue)    
      window.location.href = dataValue;
  });
}


