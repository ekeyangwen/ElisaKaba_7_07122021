import { recipe } from "./recettes.js";
import { recipes } from "./Recipes.js";

let value;
let results;

function displayRecette(recipes) {
  listeRecettes.innerHTML = "";
  recipes.forEach((recette) => {
    let newRecette = new recipe(recette);
    let listeRecettes = document.getElementById("listeRecettes");

    listeRecettes.innerHTML += newRecette.createRecipe();
  });
}
const afficherRechercherRecettes = (recipes) => {
  // fonction pour créer les fiches recettes

  let rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    let input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value);
      console.log(value);
    }
  }

  function recherche(value) {
    results = recipes.filter(
      (items) =>
        items.name.toLowerCase().includes(value) ||
        items.description.toLowerCase().includes(value) ||
        items.ingredients.map((ingredient) => {
          let ingredientMap = ingredient.ingredient;
          console.log(ingredientMap.toLowerCase());
          ingredientMap.toLowerCase().includes(value);
        })
    );

    displayRecette(results);
    console.log(results);
  }
};
const generateFilters = (recipes) => {
  let ingredientsT = [];
  let appliance = [];
  let ustensilsT = [];

  recipes.forEach((recette) => {
    appliance.push(recette.appliance);
  });
  const filteredAppliance = appliance.filter(function (ele, pos) {
    return appliance.indexOf(ele) == pos;
  });

  recipes.filter((elem) => {
    elem.ingredients.map((ingredient) => {
      let ingredientMap = ingredient.ingredient;
      ingredientsT.push(ingredientMap);
    });
  });

  const filteredIngredients = ingredientsT.filter(function (ele, pos) {
    return ingredientsT.indexOf(ele) == pos;
  });
  recipes.filter((content) => {
    content.ustensils.map((ustensil) => {
      ustensilsT.push(ustensil);
    });
  });
  const filteredUstensils = ustensilsT.filter(function (ele, pos) {
    return ustensilsT.indexOf(ele) == pos;
  });
};

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  displayRecette(recipes);
  afficherRechercherRecettes(recipes);
  generateFilters(recipes);
}

init();
