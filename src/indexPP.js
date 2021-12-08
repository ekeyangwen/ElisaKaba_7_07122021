import { recipe } from "./recettes.js";
import { oneIngredient } from "./recettes.js";
const url = "./src/Recipes.json";

// récupération des données JSON
const getData = async () =>
  await fetch(url).then((response) => response.json());

// fonction pour créer les fiches recettes
const recettes = (data) => {
  for (let recette of data.recipes) {
    console.log(data.recipes);
    let singleRecette = new recipe(recette);
    let main = document.getElementById("main");
    main.innerHTML += singleRecette.createRecipe();
  }
};

// fonction pour récupérer les ingrédients
const ingredients = (data) => {
  for (let ingredient of data.ingredients) {
    let singleIngredient = new oneIngredient(ingredient);
    let listes = document.querySelector(".listeIngredients");
    listes.innerHTML += singleIngredient.createIngredient();
  }
};

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  const data = await getData();
  recettes(data);
  ingredients(data);
}

init();
