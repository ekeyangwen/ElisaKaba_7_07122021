const installEventAppliances = () => {
  listeAppliance = document.querySelectorAll(".listeApp");
  listeAppliance.forEach((app) => {
    app.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML;

      tagsAppResults = recipes.filter((items) =>
        items.appliance.toLowerCase().includes(eventValue.toLowerCase())
      );

      affichageTagsAppliance();
      supprimerTagsAppliance();
      displayRecette(tagsAppResults);
    });
  });

  displayRecette(recipes);
};

const installEventUstensils = () => {
  listUstenstils = document.querySelectorAll(".listeUst");
  listUstenstils.forEach((ust) => {
    ust.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML;

      tagsUstResults = recipes.filter((recipe) =>
        recipe.ustensils.includes(eventValue)
      );

      affichageTagsUstensiles();
      supprimerTagsUstensile();
      displayRecette(tagsUstResults);
    });
  });

  displayRecette(recipes);
};

const installEventIngredients = () => {
  listeIngredients = document.querySelectorAll(".listeIng");
  listeIngredients.forEach((ingredient) => {
    ingredient.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML;
      tagsIngResults = recipes.filter((recipe) =>
        recipe.ingredients.forEach((ingredient) => {
          console.log(ingredient);
          ingredientMap = ingredient.ingredient;
          console.log(ingredientMap);
          console.log(ingredientMap.includes(eventValue));
          ingredientMap.includes(eventValue);
        })
      );
      affichageTagsIngredients();
      supprimerTagsIngredient();
      console.log(tagsIngResults);
      displayRecette(tagsIngResults);
    });
  });
  displayRecette(recipes);
};
