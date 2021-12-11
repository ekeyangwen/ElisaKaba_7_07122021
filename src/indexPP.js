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

    let i = 0;

    for (let ingredient of data.recipes[i].ingredients) {
      let singleIngredient = new recipe(ingredient);
      let listes = document.querySelectorAll(".ingredients");
      listes.forEach((liste) => {
        liste.innerHTML += singleIngredient.createIngredients();
      });
    }
  });

let rechercheValue = document.getElementById("barreRecherche");
rechercheValue.addEventListener("click", effacerMessage);
rechercheValue.onblur = afficherMessage;

function effacerMessage() {
  if (rechercheValue.value === rechercheValue.defaultValue) {
    rechercheValue.value = "";
  }
}

function afficherMessage() {
  if (rechercheValue.value === "") {
    rechercheValue.value = rechercheValue.defaultValue;
  }
}

let main = document.getElementById("main");
let descriptions = document.querySelectorAll(".description");
let recettes = document.querySelectorAll(".recette");
let loupeBtn = document.getElementById("loupeBtn");

loupeBtn.addEventListener("click", rechercher);

function rechercher() {
  console.log(rechercheValue.value);

  descriptions.forEach((description) => {
    if (description.value.includes(rechercheValue.value)) {
      alert("including!");
    }
  });
}
