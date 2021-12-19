import { recipe } from "./recettes.js";

const url = "./src/Recipes.json";
let newRecette;

// récupération des données JSON
fetch(url)
  .then((response) => response.json())

  // fonction pour créer les fiches recettes

  .then((data) => {
    function displayRecettes(data) {
      for (let recette of data.recipes) {
        newRecette = new recipe(recette);
        let main = document.getElementById("main");
        main.innerHTML += newRecette.createRecipe();
      }
    }

    displayRecettes(data);

    let rechercheValue = document.getElementById("barreRecherche");
    rechercheValue.addEventListener("keyup", Verif);
    let input = document.querySelector("input");
    let value = input.value.toLowerCase();
    console.log(value);
    function Verif() {
      if (value.length >= 3) {
        BinarySearchJSON();
      }
    }

    function BinarySearchJSON(recipes) {
      recipes = data.recipes;
      let First = 0;
      let Last = recipes.length - 1;
      while (First <= Last) {
        let Middle = Math.floor((First + Last) / 2);
        if (recipes[Middle] < Last) {
          First = Middle + 1;
          console.log(First);
        } else if (recipes[Middle] > Last) {
          Last = Middle - 1;
        } else {
          console.log("hello");
          // return recipes[Middle];
        }
      }
    }

    // return false;

    // console.log(data);
    // console.log(data.recipes.length);

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
