// import { recipes } from "./Recipes.js";
// import { displayRecette } from "./index.js";

const installEventAppliance = () => {
  console.log("installEvent");
  // let inputApp = document.querySelector("#inputAppareils");
  // inputApp.addEventListener("keyup", function (event) {

  //   console.log(event.target.value);
  //   rechercheApp(eventAppValue);
  // });
  let listeApp = document.querySelectorAll(".listeApp");
  console.log(listeApp);
  listeApp.forEach((app) => {
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
};

let inputUst = document.querySelector("#inputUstensiles");
inputUst.addEventListener("keyup", function (event) {
  let eventUstValue = event.target.value;
  console.log(event.target.value);
  rechercheUst(eventUstValue);
});

function rechercheUst(eventUstValue) {
  let tagsUstResults = recipes.filter((items) =>
    items.ustensils.forEach((ustensil) => {
      ustensil.toLowerCase().includes(eventUstValue.toLowerCase());
    })
  );
  console.log(tagsUstResults);
  displayRecette(tagsUstResults);
  if (eventUstValue.length == 0) {
    displayRecette(recipes);
  }
}

let inputIng = document.querySelector("#inputIngredients");
inputIng.addEventListener("keyup", function (event) {
  let eventIngvalue = event.target.value;
  console.log(event.target.value);
  rechercheIng(eventIngvalue);
});

function rechercheIng(eventIngvalue) {
  let tagsIngResults = recipes.filter((items) =>
    items.ingredients.forEach((ingredient) => {
      let ingredientMap = ingredient.ingredient;
      ingredientMap.toLowerCase().includes(eventIngvalue.toLowerCase());
    })
  );
  console.log(tagsIngResults);
  displayRecette(tagsIngResults);
  if (eventIngvalue.length == 0) {
    displayRecette(recipes);
  }
}
