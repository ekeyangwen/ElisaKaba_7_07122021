import { recipes } from "./Recipes.js";
import { displayRecette } from "./index.js";

let inputApp = document.querySelector("#inputAppareils");
inputApp.addEventListener("keyup", function (event) {
  let eventValue = event.target.value;
  console.log(event.target.value);
  rechercheApp(eventValue);
});

function rechercheApp(eventValue) {
  let tagsAppResults = recipes.filter((items) =>
    items.appliance.toLowerCase().includes(eventValue)
  );
  console.log(tagsAppResults);
  displayRecette(tagsAppResults);
  if (eventValue.length == 0) {
    displayRecette(recipes);
  }
}

let inputUst = document.querySelector("#inputUstensiles");
inputUst.addEventListener("keyup", function (event) {
  let eventValue = event.target.value;
  console.log(event.target.value);
  rechercheUst(eventValue);
});

function rechercheUst(eventValue) {
  let tagsUstResults = recipes.filter((items) =>
    items.ustensils.forEach((ustensil) => {
      ustensil.toLowerCase().includes(eventValue);
    })
  );

  console.log(tagsUstResults);
  displayRecette(tagsUstResults);
  if (eventValue.length == 0) {
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
      ingredientMap.toLowerCase().includes(eventIngvalue);
    })
  );
  console.log(tagsIngResults);
  displayRecette(tagsIngResults);
  if (eventIngvalue.length == 0) {
    displayRecette(recipes);
  }
}
