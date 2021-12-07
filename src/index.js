import { recipe } from "./recettes.js";
import { ingredients } from "./recettes.js";
const url = "./src/Recipes.json";

// récupération des données JSON
fetch(url)
  .then((response) => response.json())

  .then((data) => {
    for (let recette of data.recipes) {
      console.log(recette);
      let singleRecette = new recipe(recette);
      let main = document.getElementById("main");
      main.innerHTML += singleRecette.createRecipe();
    }
    for (let ingredient of data.ingredients) {
      console.log(ingredient);
      let singleIngredient = new ingredient(recette);
      let ingredients = document.querySelector("ingredients");
      ingredients.innerHTML += singleIngredient.createIngredients();
    }
  });
