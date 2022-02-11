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
console.log(results);
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

      afficherTagsAppliances();
      supprimerTagsAppliances();
      console.log(tagsAppResults);
      displayRecette(tagsAppResults);
      generateFiltersForAppliances(tagsAppResults);
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

      afficherTagsUstensiles();
      supprimerTagsUstensiles();
      console.log(tagsUstResults);
      displayRecette(tagsUstResults);
      generateFiltersForUstensils(tagsAppResults);
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

      afficherTagsIngredients();
      supprimerTagsIngredients();
      console.log(tagsIngResults);
      displayRecette(tagsIngResults);
      generateFiltersForIngredients(tagsIngResults);
    });
  });
};
