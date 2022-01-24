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
  installEventAppliances();
  installEventUstensils();
  installEventIngredients();
  generateFiltersForIngredients(recipes);
  generateFiltersForAppliance(recipes);
  generateFiltersForUstensils(recipes);
  addEventKeyupUstensils();
  addEventKeyupAppliance();
  addEventKeyupIngredients();
  supprimerTagsAppliance();
  supprimerTagsIngredient();
  supprimerTagsUstensile();
}

init();
