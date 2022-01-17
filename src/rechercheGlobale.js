import { recipes } from "./Recipes.js";
import { displayRecette } from "./index.js";

let value;
let results = [];

const afficherRechercherRecettes = (recipes) => {
  let rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    let input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value);
    }
  }
};

function recherche(value) {
  for (let i = 0; i < recipes.length; i++) {
    let nameIncluded = recipes[i].name.toLowerCase().includes(value);
    let descriptionIncluded = recipes[i].description
      .toLowerCase()
      .includes(value);
    let ingredientIncluded = false;
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(value)) {
        ingredientIncluded = true;
      }
    }
    if (
      nameIncluded == true ||
      descriptionIncluded == true ||
      ingredientIncluded == true
    ) {
      results.push(recipes[i]);
    }
  }

  console.log(results);
  displayRecette(results);
}

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  afficherRechercherRecettes(recipes);
}

init();
