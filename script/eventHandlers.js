const label_under = document.getElementById("burger");

const checkItUnder = (e) => {
    console.log("dytt")
    if (e.key === "Enter") {
      console.log("skjerno")
      console.log(cb.checked);    
      !cb.checked ? cb.checked = true : cb.checked = false;
    }
  }

label_under.addEventListener("keydown", checkItUnder);