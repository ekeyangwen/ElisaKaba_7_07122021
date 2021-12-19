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

// const recetteFilter = (data) => {
//   let paramsString = window.location.search;
//   let searchParams = new URLSearchParams(paramsString);
//   searchParams.getAll("=");
//   searchParams.forEach((params) => {
//     idRecette = data.recipes.filter((info) => info.id == params);
//   });
//   return { idRecette };
// };

const afficherRechercherRecettes = (data) => {
  recipes = data.recipes;
  // fonction pour créer les fiches recettes
  function displayRecette(data) {
    recipes.forEach((recette) => {
      newRecette = new recipe(recette);
      let listeRecettes = document.getElementById("listeRecettes");
      listeRecettes.innerHTML += newRecette.createRecipe();
    });
  }

  console.log(recipes);
  displayRecette(data);

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

  function recherche(value, results) {
    results = recipes.filter((item) => item.name.toLowerCase().includes(value));
    let main = document.getElementById("main");

    results.forEach((result) => {
      // displayRecette(result);
      console.log(result);
      let listeRecettes = document.getElementById("listeRecettes");
      console.log(listeRecettes);
      main.innerHTML = "";
      main.innerHTML = result.name;
    });
  }
};
// let ingredients = document.getElementById("choixTriIngredients");
// // ingredients.addEventListener("click", chooseRecipe(value, recipes));
// console.log(recipes);
// // function chooseRecipe(value, recipes) {
// //   let main = document.getElementById("main");
// //   const mediaTries = recipes.sort((a, b) => {
// //     if (value == a.ingredient) {
// //       main.innerHTML = "";
// //       return b.ingredient;
// //       // } else if (value == a.appliance) {
// //       //   main.innerHTML = "";
// //       //   return b.appliance;
// //       // } else if (value == a.ustensils) {
// //       //   main.innerHTML = "";
// //       //   return b.ustensils;
// //       // } else if (value == a.description) {
// //       //   main.innerHTML = "";
// //       //   return b.description;
// //       // }
// //     }
// //   });
// }
//  afficherRecette(resultRecherche);

/* function recherche() {
     let names = recipes.map((element) => element.name.toLowerCase().split(" "));
     names.forEach((name) => { */
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

// const recherche = (data) => {
//   let ingredients = document.querySelectorAll(".listeIngredients");
//   let descriptions = document.querySelectorAll(".description");
//   let recettes = document.querySelectorAll(".recette");

//   let titre = document.querySelectorAll(".titre");
// };

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  const data = await getData();
  // recetteFilter(data);
  afficherRechercherRecettes(data);
}

init();
