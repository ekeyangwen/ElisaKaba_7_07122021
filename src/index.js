import { recipe } from "./recettes.js";
import { recipes } from "./Recipes.js";

let value;
let results;

function displayRecette(recipes) {
  listeRecettes.innerHTML = "";
  recipes.forEach((recette) => {
    let newRecette = new recipe(recette);
    let listeRecettes = document.getElementById("listeRecettes");
    listeRecettes.innerHTML += newRecette.createRecipe();
  });
}
const afficherRechercherRecettes = (recipes) => {
  // fonction pour créer les fiches recettes

  let rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    let input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value);
      console.log(value);
    }
  }

  function recherche(value) {
    results = recipes.filter((items) => {
      items.name.toLowerCase().includes(value) ||
        // console.log(items.name)
        items.description.toLowerCase().includes(value);
      // console.log(items.description);
      // items.ingredients.map((ingredient) => {
      //   console.log(ingredient);
      //   let ingredientMap = ingredient.ingredient;
      //   console.log(ingredientMap);
      //   let mapIncludes = ingredientMap.toLowerCase().includes(value);
      //   console.log(mapIncludes);
      //   return mapIncludes;
      // });
    });
    console.log(results);
    displayRecette(results);
  }
};
const generateFilters = (recipes) => {
  let ingredientsT = [];
  let applianceT = [];
  let ustensilsT = [];

  recipes.forEach((recette) => {
    applianceT.push(recette.appliance);
  });
  const filteredAppliance = applianceT.filter(function (ele, pos) {
    return applianceT.indexOf(ele) == pos;
  });

  recipes.filter((elem) => {
    elem.ingredients.map((ingredient) => {
      let ingredientMap = ingredient.ingredient;
      ingredientsT.push(ingredientMap);
    });
  });

  const filteredIngredients = ingredientsT.filter(function (ele, pos) {
    return ingredientsT.indexOf(ele) == pos;
  });
  // console.log(filteredIngredients);

  recipes.filter((content) => {
    content.ustensils.map((ustensil) => {
      ustensilsT.push(ustensil);
    });
  });
  const filteredUstensils = ustensilsT.filter(function (ele, pos) {
    return ustensilsT.indexOf(ele) == pos;
  });
  // console.log(filteredUstensils);

  let BtnIngredient = document.getElementById("triBtnIngredients");
  BtnIngredient.addEventListener("click", AfficherInputIngredients);

  function AfficherInputIngredients() {
    const list = document.getElementById("inputIngredients");

    filteredIngredients.forEach((item) => {
      let option = document.createElement("option");
      option.value = item;
      list.appendChild(option);
    });
  }

  let BtnAppareils = document.getElementById("triBtnAppareil");
  BtnAppareils.addEventListener("click", AfficherInputAppareils);

  function AfficherInputAppareils() {
    const list = document.getElementById("inputAppareils");

    filteredAppliance.forEach((item) => {
      let option = document.createElement("option");
      option.value = item;
      list.appendChild(option);
    });
  }

  let BtnUstensiles = document.getElementById("triBtnUstensiles");
  BtnUstensiles.addEventListener("click", AfficherInputUstensiles);

  function AfficherInputUstensiles() {
    const list = document.getElementById("inputUstensiles");

    filteredUstensils.forEach((item) => {
      let option = document.createElement("option");
      option.value = item;
      list.appendChild(option);
    });
  }
};

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  displayRecette(recipes);
  afficherRechercherRecettes(recipes);
  generateFilters(recipes);
}

init();
