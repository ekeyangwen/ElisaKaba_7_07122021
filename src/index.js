import { recipe } from "./recettes.js";

const url = "./src/Recipes.json";
let newRecette;
let recipes;
let names;
let recipesName;
let value;
// récupération des données JSON
const getData = async () =>
  await fetch(url).then((response) => response.json());

// fonction pour créer les fiches recettes
const afficherRecette = (data) => {
  data.recipes.forEach((recette) => {
    newRecette = new recipe(recette);
    let listeRecettes = document.getElementById("listeRecettes");
    listeRecettes.innerHTML += newRecette.createRecipe();
  });

  recipes = data.recipes;
  // console.log(recipes);
  return recipes;
};
const rechercherRecettes = () => {
  let rechercheValue = document.getElementById("barreRecherche");
  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    let input = document.querySelector("input");
    value = input.value.toLowerCase();
    if (value.length >= 3) {
      recherche(value, recipes);
      console.log(value);
    }
  }

  function recherche(value, recettesAtrier) {
    // console.log(value);
    let main = document.getElementById("main");
    // console.log(recipes);
    const recetteTries = recettesAtrier.includes((a, b) => {
      if (a.value == recipes.name) {
        main.innerHTML = "ok";
        return b.value;
      }
      if (a.name > b.name) {
        main.innerHTML = "";
        return 1;
      }
      // }
      // } else if (value == a.ingredient) {
      //   main.innerHTML = "";
      //   return b.ingredient;
      // } else if (value == a.appliance) {
      //   main.innerHTML = "";
      //   return b.appliance;
      // } else if (value == a.ustensils) {
      //   main.innerHTML = "";
      //   return b.ustensils;
      // } else if (value == a.description) {
      //   main.innerHTML = "";
      //   return b.description;
      // }
    });

    afficherRecette(recetteTries);
  }
};
//   function recherche() {
//     let names = recipes.map((element) => element.name.toLowerCase().split(" "));
//     names.forEach((name) => {
//       // console.log(name.includes(value));
//     });
//     let appliances = recipes.map((element) =>
//       element.appliance.toLowerCase().split(" ")
//     );
//     // console.log(appliances);
//   }
// };

// function triRecettes(recipes) {}

// triRecettes();

// fonction de tri
// function chooseRecipe(rechercheValue, recettesAtrier) {
//   let titre = document.querySelectorAll(".titre");
//   const recettesTriees = recettesAtrier.sort((a, b) => {
//     if (titre.include(rechercheValue)) {
//       return console.log(recettesTriees);
//     }
//   });

//   afficherRecette(recettesTriees);
//   chooseRecipe();
// }

const recherche = (data) => {
  let ingredients = document.querySelectorAll(".listeIngredients");
  let descriptions = document.querySelectorAll(".description");
  let recettes = document.querySelectorAll(".recette");

  let titre = document.querySelectorAll(".titre");
};

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  const data = await getData();
  afficherRecette(data);
  rechercherRecettes(data);
}

init();
