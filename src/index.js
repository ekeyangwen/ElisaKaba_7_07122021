import { recipe } from "./recettes.js";

const url = "./src/Recipes.json";
let newRecette;
let idRecette;
let recipes;
let value;
let results;
// récupération des données JSON
const getData = async () =>
  await fetch(url).then((response) => response.json());

const afficherRechercherRecettes = (data) => {
  recipes = data.recipes;

  // fonction pour créer les fiches recettes
  function displayRecette(recipes) {
    recipes.forEach((recette) => {
      newRecette = new recipe(recette);
      let listeRecettes = document.getElementById("listeRecettes");
      listeRecettes.innerHTML += newRecette.createRecipe();
    });
  }

  displayRecette(recipes);

  let rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    let input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value, idRecette);
      console.log(value);
    }
  }
  let main = document.getElementById("main");
  function recherche(value, results) {
    results = recipes.filter((item) => item.name.toLowerCase().includes(value));

    main.innerHTML = "";
    results.forEach((result) => {
      let newResults = new recipe(result);
      main.innerHTML += newResults.createRecipe();
    });
  }
};

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  const data = await getData();
  afficherRechercherRecettes(data);
}

init();
