let results = [];
let value;
let rechercheValue;
let input;
let noResults;

const afficherRechercherRecettes = (recipes) => {
  let rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    let input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value);
    } else {
      results = recipes;
      noResult();
      displayRecette(recipes);
      generateFiltersForAppliances(recipes);
      generateFiltersForIngredients(recipes);
      generateFiltersForUstensils(recipes);
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
  displayRecette(results);
  generateFiltersForAppliances(results);
  generateFiltersForIngredients(results);
  generateFiltersForUstensils(results);
  noResult();
}

function noResult() {
  let noResults = document.querySelector("#noResults");
  console.log(results.length);
  if (results.length == 0) {
    console.log("results===none");
    noResults.style.display = "block";
  } else {
    console.log("results===recipes");
    noResults.style.display = "none";
  }
}
