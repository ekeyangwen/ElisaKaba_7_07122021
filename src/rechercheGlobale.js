let results;
let value;
let rechercheValue;
let input;
let noResults;

//base de la recheche principale
function afficherRechercherRecettes(recipes) {
  rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);
  console.log(results);

  //Vérification des 3 caractères minimum
  function Verif() {
    input = document.querySelector("input");
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

  //Recherche PRINCIPALE
  function recherche(value) {
    results = recipes.filter(
      (items) =>
        items.name.toLowerCase().includes(value) ||
        items.description.toLowerCase().includes(value) ||
        items.ingredients.forEach((ingredient) => {
          ingredientMap = ingredient.ingredient;
          ingredientMap.toLowerCase().includes(value);
        })
    );

    displayRecette(results);
    generateFiltersForAppliances(results);
    generateFiltersForIngredients(results);
    generateFiltersForUstensils(results);
    triAppliance.style.display = "none";
    triIngredients.style.display = "none";
    triUstensiles.style.display = "none";
    document.getElementsByName("triIngredients")[0].placeholder = "Ingredients";
    noResult();
  }
}

//function pour envoyer le message d'erreur en cas d'absence de résultats
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
