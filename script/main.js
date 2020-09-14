

/*
const aweInput = new awesomplete(myinput);

myinput.addEventListener('awesomplete-select', function(e) {
  let url = e.text.value; //the value associated with the selection
  console.log('navigationg to: ' + url);
  window.location.href = url;

}*/


$("#front-input").bind('input', function () {
  if(checkExists($('#front-input').val()) === true) {
    var url = "";
    var text = $('#front-input').val();
    switch (text) {
      case "Samferdsel":
        url = 'www.db.no';
        break;
      case "Helse": 
        url = '@Url.Action("Helse)';
        break;
      case "Utdanning":
        url = 'www.vg.no';
        break;
      
        default: 
          url = 'Url.Action("Samferdsel")'

    }

    window.location = url;
  }
});

function checkExists(inputValue) {
  console.log(inputValue);

  var x = document.getElementById("topics");
  var i;
  var flag;
        for (i = 0; i < x.options.length; i++) {
            if (inputValue == x.options[i].value) {
                flag = true;
            }
        }
        return flag;
    
}

/*
<input class="awesomplete" id="front-input" list="topics">
<datalist id="topics">
    <option value="http://www.vg.no">
        Samferdsel
    </option>
    <option value="Helse"></option>
    <option value="http://www.db.no">
        Utdanning
    </option>
    <option value="Flyktning og asyl"></option>
    <option value="Olje og energi"></option>
    <option value="Natur og dyr"></option>
    <option value="Landbruk"></option>
</datalist>
<input class="standard-button" id="search" type="submit" value="Søk">
