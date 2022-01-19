const installEventAppliance = () => {
  let listeAppliance = document.querySelectorAll(".listeApp");
  console.log(listeAppliance);
  listeAppliance.forEach((app) => {
    console.log(app);
    app.addEventListener("click", function (e) {
      let eventAppValue = e.target.innerHTML;
      console.log(eventAppValue);
      e.preventDefault();
      let tagsAppResults = recipes.filter((items) =>
        items.appliance.toLowerCase().includes(eventAppValue.toLowerCase())
      );
      console.log(tagsAppResults);
      displayRecette(tagsAppResults);

      generateFilters(tagsAppResults);
    });
  });
  displayRecette(recipes);
  addEventKeyupAppliance();
};

const installEventUstensils = () => {
  let listUstenstils = document.querySelectorAll(".listeUst");
  listUstenstils.forEach((ust) => {
    console.log("loadUstensils");
    ust.addEventListener("click", function (e) {
      let eventUstValue = e.target.innerHTML;
      console.log(eventUstValue);
      e.preventDefault();
      let tagsUstResults = recipes.filter((items) =>
        items.ustensils.forEach((ustensil) => {
          ustensil.toLowerCase().includes(eventUstValue.toLowerCase());
        })
      );
      console.log(tagsUstResults);
      generateFilters(tagsUstResults);
      displayRecette(tagsUstResults);
    });
  });
  displayRecette(recipes);
  addEventKeyupUstensils();
};

const installEventIngredients = () => {
  let listIngredients = document.querySelectorAll(".listeIng");
  listIngredients.forEach((ingredient) => {
    ingredient.addEventListener("click", function (event) {
      let eventIngvalue = event.target.innerHTML;
      console.log(eventIngvalue);

      let tagsIngResults = recipes.filter((items) =>
        items.ingredients.forEach((ingredient) => {
          console.log(ingredient);
          let ingredientMap = ingredient.ingredient;
          console.log(ingredientMap);
          ingredientMap.toLowerCase().includes(eventIngvalue.toLowerCase());
        })
      );

      console.log(tagsIngResults);
      displayRecette(tagsIngResults);
    });
  });
  displayRecette(recipes);
  addEventKeyupIngredients();
};
