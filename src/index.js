import { recipe } from "./recettes.js";
import { recipes } from "./Recipes.js";

// fonction pour créer les fiches recettes
export function displayRecette(recipes) {
  listeRecettes.innerHTML = "";
  for (let recette of recipes) {
    let newRecette = new recipe(recette);
    let listeRecettes = document.getElementById("listeRecettes");
    listeRecettes.innerHTML += newRecette.createRecipe();
  }
}

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  displayRecette(recipes);
}

init();
