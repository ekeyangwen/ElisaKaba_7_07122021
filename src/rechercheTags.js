import { recipes } from "./Recipes.js";
import { displayRecette } from "./index.js";

let inputIng = document.querySelector("#inputIngredients");

inputIng.addEventListener("keyup", function (event) {
  let eventValue = event.target.value;
  console.log("afficherkeyupIngredients");

  let listIngredients = document.querySelectorAll(".liste");

  listIngredients.forEach((ingredient) => {
    if (ingredient.innerHTML.toLowerCase().includes(eventValue.toLowerCase())) {
      ingredient.style.display = "block";
    } else {
      ingredient.style.display = "none";
    }
  });
});

let inputApp = document.querySelector("#inputAppareils");

inputApp.addEventListener("keyup", function (event) {
  let eventValue = event.target.value;
  console.log("afficherkeyupAppareils");

  let listeAppareil = document.querySelectorAll(".liste");

  listeAppareil.forEach((appareil) => {
    let returnValue = appareil.innerHTML
      .toLowerCase()
      .includes(eventValue.toLowerCase());
    console.log(appareil);
    if (returnValue) {
      appareil.style.display = "block";
    } else {
      appareil.style.display = "none";
    }
  });
});

let inputUst = document.querySelector("#inputUstensiles");

inputUst.addEventListener("keyup", function (event) {
  let eventValue = event.target.value;
  console.log("afficherkeyupUstensiles");

  let listUstensiles = document.querySelectorAll(".liste");
  listUstensiles.forEach((ustensile) => {
    console.log(ustensile);
    if (ustensile.innerHTML.toLowerCase().includes(eventValue.toLowerCase())) {
      ustensile.style.display = "block";
    } else {
      ustensile.style.display = "none";
    }
  });
});
