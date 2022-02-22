let results = [];
let value;
let rechercheValue;
let input;
let noResults;

//base de la recherche globale
const afficherRechercherRecettes = (recipes) => {
  console.log("afficherRechercherRecettes");
  let rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  //Vérification que 3 caractères sont entrés dans la barre de recherche
  function Verif() {
    console.log("entrée dans fonction verif");
    let input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value);
    } else {
      results = [...recipes];
      noResult();
      displayRecette(results);
      generateFiltersForAppliances(results);
      generateFiltersForIngredients(results);
      generateFiltersForUstensils(results);
    }
  }
};

//Recherche PRINCIPALE
function recherche(value) {
  results = [];
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
  //Affichage des recette en fonction du resultat de la recherche
  displayRecette(results);
  generateFiltersForAppliances(results);
  generateFiltersForIngredients(results);
  generateFiltersForUstensils(results);
  triAppliance.style.display = "none";
  triIngredients.style.display = "none";
  triUstensiles.style.display = "none";
  noResult();
}

//Affichage du message d'erreur si pas de résultat
function noResult() {
  let noResults = document.querySelector("#noResults");
  if (results.length == 0) {
    console.log("results===none");
    noResults.style.display = "block";
  } else {
    console.log("results===recipes");
    noResults.style.display = "none";
  }
}
