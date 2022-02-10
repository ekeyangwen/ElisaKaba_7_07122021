function noResult() {
  let noResults = document.querySelector("#noResults");
  if (results.length == 0) {
    noResults.style.display = "block";
  }
}

function afficherRechercherRecettes(recipes) {
  rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value);
    } else if (value.length == 0) {
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
}
