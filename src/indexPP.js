import { recipe } from "./recettes.js";
const url = "./src/Recipes.json";

// récupération des données JSON
fetch(url)
  .then((response) => response.json())

  .then((data) => {
    for (let recette of data.recipes) {
      let singleRecette = new recipe(recette);
      let main = document.getElementById("main");
      main.innerHTML += singleRecette.createRecipe();
    }
  });
