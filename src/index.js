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
    console.log("Hello");
    data.recipes.forEach((recipe) => {
      let descriptionContent = recipe.description.toLowerCase();
      let titleContent = recipe.name.toLowerCase();
      let ingredientContent = recipe.ingredients.map((ingredient) => {
        // console.log(ingredient);
        let ingredientContent = ingredient.ingredient.toLowerCase();

        let inputValue = input.value.toLowerCase();
        // console.log(recipe);
        let includeDescription = descriptionContent.includes(inputValue);
        let includeTitle = titleContent.includes(inputValue);
        let includeIngredient = ingredientContent.includes(inputValue);
        console.log(ingredientContent);
        // console.log(inputValue);
        if (
          includeDescription === false ||
          includeTitle === false ||
          includeIngredient === false
        ) {
          console.log(includeIngredient);
          recettes.forEach((recette) => {
            // console.log(recette);
            recette.style.display = "none";
          });
        }
        if (
          includeDescription === true ||
          includeTitle === true ||
          includeIngredient === true
        ) {
          // console.log(includeTitle);
          recettes.forEach((recette) => {
            recette.style.display = "block";
          });
        }
      }); // }
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
