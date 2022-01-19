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
  afficherRechercherRecettes(recipes);
  generateFilters(recipes);
  installEventAppliance();
  installEventUstensils();
  installEventIngredients();
  addEventKeyupUstensils();
  addEventKeyupAppliance();
  addEventKeyupIngredients();
}

init();
