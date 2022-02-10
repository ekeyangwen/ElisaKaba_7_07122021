const installEventAppliances = () => {
  listeAppliance = document.querySelectorAll(".listApp");
  listeAppliance.forEach((appliance) => {
    appliance.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML.toLowerCase();
      tagsAppResults = recipes.filter((recette) => {
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
      tagsUstResults = recipes.filter((recette) => {
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

      generateFiltersForUstensils(tagsUstResults);
    });
  });
};

const installEventIngredients = () => {
  listeIngredients = document.querySelectorAll(".listIng");
  listeIngredients.forEach((ingredient) => {
    ingredient.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML.toLowerCase();
      tagsIngResults = recipes.filter((recette) => {
        let ingredientMap = [];
        recette.ingredients.forEach((ingredient) => {
          ingredientMap.push(ingredient.ingredient.toLowerCase());
        });
        return ingredientMap.includes(eventValue);
      });

      afficherTagsIngredients();
      supprimerTagsIngredients();
      displayRecette(tagsIngResults);

      generateFiltersForIngredients(tagsIngResults);
    });
  });
};
