import { recipe } from "./recettes.js";
import { recipes } from "./Recipes.js";

let value;
let results = [];

// fonction pour créer les fiches recettes
function displayRecette(recipes) {
  listeRecettes.innerHTML = "";
  for (let recette of recipes) {
    let newRecette = new recipe(recette);
    let listeRecettes = document.getElementById("listeRecettes");
    listeRecettes.innerHTML += newRecette.createRecipe();
  }
}
const afficherRechercherRecettes = (recipes) => {
  let rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    let input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value);
    }
  }

  function recherche(value) {
    for (let i = 0; i < recipes.length; i++) {
      let nameIncluded = recipes[i].name.toLowerCase().includes(value);
      let descriptionIncluded = recipes[i].description
        .toLowerCase()
        .includes(value);
      let ingredientIncluded = false;
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        if (
          recipes[i].ingredients[j].ingredient.toLowerCase().includes(value)
        ) {
          ingredientIncluded = true;
        }
      }
      if (
        nameIncluded == true ||
        descriptionIncluded == true ||
        ingredientIncluded == true
      ) {
        results.push(recipes[i]);
      }
    }

    console.log(results);
    displayRecette(results);
  }
};

const generateFilters = (recipes) => {
  let ingredientsT = [];
  let applianceT = [];
  let ustensilsT = [];

  for (let recette of recipes) {
    applianceT.push(recette.appliance);
  }
  const filteredAppliance = new set(applianceT);
  recipes.filter((elem) => {
    elem.ingredients.map((ingredient) => {
      let ingredientMap = ingredient.ingredient;
      ingredientsT.push(ingredientMap);
    });
  });

  const filteredIngredients = new set(ingredientsT);

  recipes.filter((content) => {
    content.ustensils.map((ustensil) => {
      ustensilsT.push(ustensil);
    });
  });
  const filteredUstensils = new set(ustensilsT);

  let BtnIngredient = document.getElementById("triBtnIngredients");
  BtnIngredient.addEventListener("click", AfficherInputIngredients);

  function AfficherInputIngredients() {
    const list = document.getElementById("inputIngredients");

    for (let item of filteredIngredients) {
      let option = document.createElement("option");
      option.value = item;
      list.appendChild(option);
    }
  }

  let BtnAppareils = document.getElementById("triBtnAppareil");
  BtnAppareils.addEventListener("click", AfficherInputAppareils);

  function AfficherInputAppareils() {
    const list = document.getElementById("inputAppareils");

    for (let item of filteredAppliance) {
      let option = document.createElement("option");
      option.value = item;
      list.appendChild(option);
    }
  }

  let BtnUstensiles = document.getElementById("triBtnUstensiles");
  BtnUstensiles.addEventListener("click", AfficherInputUstensiles);

  function AfficherInputUstensiles() {
    const list = document.getElementById("inputUstensiles");

    for (let item of filteredUstensils) {
      let option = document.createElement("option");
      option.value = item;
      list.appendChild(option);
    }
  }
};

const resultsFilter = () => {
  let choixingredient = document.getElementById("choixTriIngredients");
  let choixappliance = document.getElementById("choixTriAppareil");
  let choixustensils = document.getElementById("choixTriUstensiles");
  choixingredient.addEventListener("keyup", afficherChange);
  choixappliance.addEventListener("keyup", afficherChange);
  choixustensils.addEventListener("change", afficherChange);
  function afficherChange() {
    console.log("changed");
  }
};
// fonction globale d'intialisation de toutes les fonctions
async function init() {
  displayRecette(recipes);
  afficherRechercherRecettes(recipes);
  generateFilters(recipes);
  resultsFilter(recipes);
}

init();
