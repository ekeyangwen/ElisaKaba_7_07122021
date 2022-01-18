// import { recipe } from "./recettes.js";
// import { recipes } from "./Recipes.js";
// export
// fonction pour créer les fiches recettes
function displayRecette(recipes) {
  listeRecettes.innerHTML = "";
  recipes.forEach((recette) => {
    let newRecette = new recipe(recette);
    let listeRecettes = document.getElementById("listeRecettes");
    listeRecettes.innerHTML += newRecette.createRecipe();
  });
}

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  displayRecette(recipes);
  generateFilters(recipes);
  installEventAppliance();
  afficherRechercherRecettes(recipes);
  addEventKeyupUstensils();
  addEventKeyupAppliance();
  addEventKeyupIngredients();
}

init();
