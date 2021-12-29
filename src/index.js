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
    applianceT.sort();
  }
  const filteredAppliance = new Set(applianceT);
  console.log(filteredAppliance);
  recipes.filter((elem) => {
    elem.ingredients.map((ingredient) => {
      let ingredientMap = ingredient.ingredient;
      ingredientsT.push(ingredientMap);
      ingredientsT.sort();
    });
  });

  const filteredIngredients = new Set(ingredientsT);

  recipes.filter((content) => {
    content.ustensils.map((ustensil) => {
      ustensilsT.push(ustensil);
      ustensilsT.sort();
    });
  });
  const filteredUstensils = new Set(ustensilsT);

  let BtnIngredient = document.getElementById("triBtnIngredients");
  BtnIngredient.addEventListener("click", AfficherInputIngredients);

  function AfficherInputIngredients() {
    const triIngredients = document.getElementById("triIngredientsInput");

    if (triIngredients.innerHTML == "") {
      for (let item of filteredIngredients) {
        let list = document.createElement("li");
        list.classList.add("liste");
        list.style.listStyle = "none";
        list.innerHTML = item;
        triIngredients.appendChild(list);
      }
    } else {
      triIngredients.innerHTML = "";
    }
  }

  let BtnAppareils = document.getElementById("triBtnAppareil");
  BtnAppareils.addEventListener("click", AfficherInputAppareils);
  let input = document.querySelector("input");
  input.addEventListener("keyup", AfficherInputAppareils);

  function AfficherInputAppareils() {
    const triAppliance = document.getElementById("triApplianceInput");

    if (triAppliance.innerHTML == "") {
      for (let item of filteredAppliance) {
        let list = document.createElement("li");
        list.classList.add("liste");
        list.style.listStyle = "none";
        list.innerHTML = item;
        triAppliance.appendChild(list);
      }
    } else {
      triAppliance.innerHTML = "";
    }
  }

  let BtnUstensiles = document.getElementById("triBtnUstensiles");
  BtnUstensiles.addEventListener("click", AfficherInputUstensiles);

  function AfficherInputUstensiles() {
    const triUstensiles = document.getElementById("triUstensilesInput");

    if (triUstensiles.innerHTML == "") {
      for (let item of filteredUstensils) {
        let list = document.createElement("li");
        list.classList.add("liste");
        list.style.listStyle = "none";
        list.innerHTML = item;
        triUstensiles.appendChild(list);
      }
    } else {
      triUstensiles.innerHTML = "";
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
