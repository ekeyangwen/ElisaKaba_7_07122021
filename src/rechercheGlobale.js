let results;

function afficherRechercherRecettes(recipes) {
  rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);
  console.log(results);
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

    console.log(results);
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
      console.log("results=recipes");
      noResults.style.display = "none";
    }
  }
}
