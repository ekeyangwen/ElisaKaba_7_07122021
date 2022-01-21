const installEventAppliance = () => {
  listeAppliance = document.querySelectorAll(".listeApp");
  listeAppliance.forEach((app) => {
    app.addEventListener("click", function (e) {
      eventAppValue = e.target.innerHTML;
      tagsAppResults = recipes.filter((items) =>
        items.appliance.toLowerCase().includes(eventAppValue.toLowerCase())
      );
      console.log(tagsAppResults);
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
      eventUstValue = e.target.innerHTML;
      console.log(eventUstValue);
      tagsUstResults = recipes.filter((items) =>
        items.ustensils.forEach((ustensil) => {
          ustensil.toLowerCase().includes(eventUstValue.toLowerCase());
        })
      );
      console.log(tagsUstResults);
      affichageTagsUstensiles();
      supprimerTagsUstensile();
      displayRecette(tagsUstResults);
    });
  });

  displayRecette(recipes);
};

const installEventIngredients = () => {
  listeIngredients.forEach((ingredient) => {
    // console.log(ingredient);
    ingredient.addEventListener("click", function (event) {
      eventIngvalue = event.target.innerHTML;
      console.log(eventIngvalue);
      tagsIngResults = recipes.filter((items) =>
        items.ingredients.forEach((ingredient) => {
          console.log(ingredient);
          ingredientMap = ingredient.ingredient;
          console.log(ingredientMap);
          ingredientMap.toLowerCase().includes(eventIngvalue.toLowerCase());
        })
      );
      console.log(tagsIngResults);
      affichageTagsIngredients();
      supprimerTagsIngredients();
      displayRecette(tagsIngResults);
    });
  });
};
