const addEventKeyupIngredients = () => {
  let inputIng = document.querySelector("#inputIngredients");
  inputIng.addEventListener("keyup", function (event) {
    let eventValue = event.target.value;
    console.log("afficherkeyupIngredients");

    let listIngredients = document.querySelectorAll(".listeIng");

    listIngredients.forEach((ingredient) => {
      if (
        ingredient.innerHTML.toLowerCase().includes(eventValue.toLowerCase())
      ) {
        ingredient.style.display = "block";
      } else {
        ingredient.style.display = "none";
      }
    });
  });
};
const addEventKeyupAppliance = () => {
  let inputApp = document.querySelector("#inputAppareils");
  inputApp.addEventListener("keyup", function (event) {
    let eventValue = event.target.value;

    let listeAppareil = document.querySelectorAll(".listeApp");

    listeAppareil.forEach((appareil) => {
      if (appareil.innerHTML.toLowerCase().includes(eventValue.toLowerCase())) {
        appareil.style.display = "block";
      } else {
        appareil.style.display = "none";
      }
    });
  });
};
const addEventKeyupUstensils = () => {
  let inputUst = document.querySelector("#inputUstensiles");

  inputUst.addEventListener("keyup", function (event) {
    let eventValue = event.target.value;

    let listUstensiles = document.querySelectorAll(".listeUst");
    listUstensiles.forEach((ustensile) => {
      if (
        ustensile.innerHTML.toLowerCase().includes(eventValue.toLowerCase())
      ) {
        ustensile.style.display = "block";
      } else {
        ustensile.style.display = "none";
      }
    });
  });
};
