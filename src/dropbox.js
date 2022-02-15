const addEventKeyupIngredients = () => {
  let inputIng = document.querySelector("#inputIngredients");
  inputIng.addEventListener("keyup", function (event) {
    value = event.target.value;

    let listIngredients = document.querySelectorAll(".listeIng");

    listIngredients.forEach((ingredient) => {
      if (
        ingredient.innerHTML.toLowerCase().includes(eventValue.toLowerCase())
      ) {
        ingredient.style.display = "block";
      } else {
        ingredient.style.display = "none";
        noresults();
      }
    });
  });
};
const addEventKeyupAppliance = () => {
  let inputApp = document.querySelector("#inputAppareils");
  inputApp.addEventListener("keyup", function (event) {
    value = event.target.value;
    let listeAppareil = document.querySelectorAll(".listApp");
    console.log(listeAppareil);
    listeAppareil.forEach((appareil) => {
      console.log(appareil.innerHTML.toLowerCase());
      if (appareil.innerHTML.toLowerCase().includes(value.toLowerCase())) {
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
    value = event.target.value;

    let listUstensiles = document.querySelectorAll(".listeUst");
    listUstensiles.forEach((ustensil) => {
      if (ustensil.innerHTML.toLowerCase().includes(eventValue.toLowerCase())) {
        ustensil.style.display = "block";
      } else {
        ustensil.style.display = "none";
        noresults();
      }
    });
  });
};
