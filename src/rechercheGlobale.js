import { recipes } from "./Recipes.js";
import { displayRecette } from "./index.js";

let value;
let results;

const afficherRechercherRecettes = (recipes) => {
  let rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    let input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value);
    } else if (value.length == 0) {
      displayRecette(recipes);
    }
  }

  function recherche(value) {
    results = recipes.filter(
      (items) =>
        items.name.toLowerCase().includes(value) ||
        items.description.toLowerCase().includes(value) ||
        items.ingredients.forEach((ingredient) => {
          let ingredientMap = ingredient.ingredient;
          ingredientMap.toLowerCase().includes(value);
        })
    );

    console.log(results);
    displayRecette(results);
    if (results.length == 0) {
      alert("Nous ne trouvons pas de résultat!");
    }
  }
};

async function init() {
  afficherRechercherRecettes(recipes);
}
init();
