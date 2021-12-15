import { recipe } from "./recettes.js";

const url = "./src/Recipes.json";
let newRecette;

// récupération des données JSON
const getData = async () =>
  await fetch(url).then((response) => response.json());

// fonction pour créer les fiches recettes
const afficherRecette = (data) => {
  for (let recette of data.recipes) {
    newRecette = new recipe(recette);
    let main = document.getElementById("main");
    main.innerHTML += newRecette.createRecipe();
  }
};

// fonction de recherche
const recherche = (data) => {
  let ingredients = document.querySelectorAll(".listeIngredients");
  let descriptions = document.querySelectorAll(".description");
  let titre = document.querySelectorAll(".titre");
  let recettes = document.querySelectorAll(".recette");
  let rechercheValue = document.getElementById("barreRecherche");
  let input = document.querySelector("input");

  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    if (input.value.length >= 3) {
      chooseRecipe();
    }
  }

  // let includeTitre = titre.forEach((title) => {
  //   title.innerHTML.toLowerCase().includes(rechercheValue.value.toLowerCase());
  // });

  // let includeDescription = descriptions.forEach((description) => {
  //   description.innerHTML
  //     .toLowerCase()
  //     .includes(rechercheValue.value.toLowerCase());
  // });

  // let includeIngredients = ingredients.forEach((ingredient) => {
  //   ingredient.innerHTML
  //     .toLowerCase()
  //     .includes(rechercheValue.value.toLowerCase());
  // });

  function chooseRecipe() {
    data.recipes.forEach((recipe) => {
      let descriptionContent = recipe.description.toLowerCase();
      let titleContent = recipe.name.toLowerCase();
      //   // let ingredientContent = recipe.ingredients.map((ingredient) => {
      //   // console.log(ingredient);
      //   // let ingredientContent = ingredient.ingredient.toLowerCase();

      let inputValue = input.value.toLowerCase();
      // console.log(recipe);
      let includeDescription = descriptionContent.includes(inputValue);
      let includeTitle = titleContent.includes(inputValue);
      console.log(includeTitle);
      //   console.log(titleContent);
      //   console.log(inputValue);
      // const include = includeDescription === true || includeTitle === true;
      //   // includeIngredient === true;
      //   if (include === true) {
      //     // console.log(includeIngredient);
      //     recettes.forEach((recette) => {
      //       // console.log(recette);
      //       recette.classList.toggle("hiddenRecipe");
      //     });
      //   }
      //   // }); // }
      // });

      recettes.forEach(function (e) {
        if (includeDescription === false || includeTitle === false) {
          e.classList.add("hiddenRecipe");
          // console.log(include);
        } else {
          e.classList.remove("hiddenRecipe");
        }
      });
    });
  }
};

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  const data = await getData();
  afficherRecette(data);
  recherche(data);
}

init();
