import { recipe } from "./recettes.js";
import { recipes } from "./Recipes.js";

let value;
let results;

// fonction pour créer les fiches recettes
function displayRecette(recipes) {
  listeRecettes.innerHTML = "";
  recipes.forEach((recette) => {
    let newRecette = new recipe(recette);
    let listeRecettes = document.getElementById("listeRecettes");
    listeRecettes.innerHTML += newRecette.createRecipe();
  });
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
    results = recipes.filter(
      (items) =>
        items.name.toLowerCase().includes(value) ||
        items.description.toLowerCase().includes(value) ||
        items.ingredients.forEach((ingredient) => {
          console.log(ingredient);
          let ingredientMap = ingredient.ingredient;
          let mapIncludes = ingredientMap.toLowerCase().includes(value);
          console.log(mapIncludes);
        })
    );

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
  let choix = document.getElementById("choixTriIngredients");
  choix.addEventListener("change", afficherChange);
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
