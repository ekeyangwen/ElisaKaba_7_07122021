let newRecette;
let listeRecettes = "";

// fonction pour créer les fiches recettes
function displayRecette(recipes) {
  listeRecettes.innerHTML = "";
  recipes.forEach((recette) => {
    newRecette = new recipe(recette);
    listeRecettes = document.getElementById("listeRecettes");
    listeRecettes.innerHTML += newRecette.createRecipe();
  });
}

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  displayRecette(recipes);
  afficherRechercherRecettes(recipes);
  afficherKeyupIngredients();

  generateFiltersForIngredients(recipes);
  generateFiltersForAppliances(recipes);
  generateFiltersForUstensils(recipes);
  installEventAppliances();
  installEventUstensils();
  installEventIngredients();
  addEventKeyupUstensils();
  addEventKeyupAppliance();
  addEventKeyupIngredients();
}

init();
