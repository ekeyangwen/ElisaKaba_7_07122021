import { recipe } from "./recettes.js";

const url = "./src/Recipes.json";
let newRecette;

// récupération des données JSON
fetch(url)
  .then((response) => response.json())

  // fonction pour créer les fiches recettes

  .then((data) => {
    for (let recette of data.recipes) {
      newRecette = new recipe(recette);
      let main = document.getElementById("main");
      main.innerHTML += newRecette.createRecipe();
    }

    // console.log(data);
    // console.log(data.recipes.length);
    let i = 0;

    // for (let ingredient of data.recipes[i].ingredients) {
    //   for (i; i < data.recipes.length; i++) {
    //     let newIngredient = new oneIngredient(ingredient[i]);
    //     let liste = document.querySelector(".ingredients");
    //     liste.innerHTML += newIngredient.createIngredient();
    //   }
    // }
  });
// fonction pour récupérer les ingrédients
// .then((data) => {
//   for (let ingredient in data.ingredients) {
//     console.log(ingredient);
//     let singleIngredient = new oneIngredient(ingredient);
//     let liste = document.querySelector(".listeIngredients");
//     liste.innerHTML += singleIngredient.createIngredient();
//   }
// });
