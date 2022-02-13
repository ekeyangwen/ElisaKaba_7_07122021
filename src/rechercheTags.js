results = recipes.filter(
  (items) =>
    items.name.toLowerCase().includes(value) ||
    items.description.toLowerCase().includes(value) ||
    items.ingredients.forEach((ingredient) => {
      ingredientMap = ingredient.ingredient;
      ingredientMap.toLowerCase().includes(value);
    })
);
if (results.length == 0) {
  results = recipes;
}

const installEventAppliances = () => {
  listeAppliance = document.querySelectorAll(".listApp");
  listeAppliance.forEach((appliance) => {
    appliance.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML.toLowerCase();
      tagsAppResults = results.filter((recette) => {
        let applianceMap = [];
        applianceMap.push(recette.appliance.toLowerCase());
        return applianceMap.includes(eventValue);
      });
      results = tagsAppResults;
      afficherTagsAppliances();
      supprimerTagsAppliances();
      console.log(tagsAppResults);
      displayRecette(tagsAppResults);
      generateFiltersForAppliances(results);
      generateFiltersForIngredients(results);
      generateFiltersForUstensils(results);
    });
  });
};

const installEventUstensils = () => {
  listeUstensils = document.querySelectorAll(".listUst");
  listeUstensils.forEach((ustensil) => {
    ustensil.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML.toLowerCase();
      tagsUstResults = results.filter((recette) => {
        let ustensilMap = [];
        recette.ustensils.forEach((ustensil) => {
          ustensilMap.push(ustensil.toLowerCase());
        });
        return ustensilMap.includes(eventValue);
      });
      results = tagsUstResults;
      afficherTagsUstensiles();
      supprimerTagsUstensiles();
      console.log(tagsUstResults);
      displayRecette(tagsUstResults);
      generateFiltersForAppliances(results);
      generateFiltersForIngredients(results);
      generateFiltersForUstensils(results);
    });
  });
};

const installEventIngredients = () => {
  listeIngredients = document.querySelectorAll(".listIng");
  listeIngredients.forEach((ingredient) => {
    ingredient.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML.toLowerCase();
      tagsIngResults = results.filter((recette) => {
        let ingredientMap = [];
        recette.ingredients.forEach((ingredient) => {
          ingredientMap.push(ingredient.ingredient.toLowerCase());
        });
        return ingredientMap.includes(eventValue);
      });
      results = tagsIngResults;
      afficherTagsIngredients();
      supprimerTagsIngredients();
      console.log(tagsIngResults);
      displayRecette(tagsIngResults);
      generateFiltersForAppliances(results);
      generateFiltersForIngredients(results);
      generateFiltersForUstensils(results);
    });
  });
};
