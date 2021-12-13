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
    // console.log(newRecette);
    let main = document.getElementById("main");
    main.innerHTML += newRecette.createRecipe();
  }

  //récuoération des ingredients
  let i = 0;
  for (i; i < data.recipes[i].ingredients.length; i++) {
    for (let ingredient of data.recipes[i].ingredients) {
      // console.log(ingredient);
      let singleIngredient = new recipe(ingredient);
      // console.log(singleIngredient);
      let listes = document.querySelectorAll(".ingredients");
      listes.forEach((liste) => {
        liste.innerHTML += singleIngredient.createIngredients();
      });
    }
    // suppression des qtite et units inexistantes
    let points = document.querySelectorAll(".points");
    let quantity = document.querySelectorAll(".quantity");
    let units = document.querySelectorAll(".units");
    quantity.forEach((qtite) => {
      if (qtite.innerHTML === "undefined") {
        qtite.style.display = "none";
        points.forEach((point) => {
          point.style.display = "none";
        });
      }
    });

    units.forEach((unit) => {
      if (unit.innerHTML === "undefined") {
        unit.style.display = "none";
      } else {
        points.forEach((point) => {
          point.style.display = "flex";
        });
      }
    });
  }
};

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
let legende = document.getElementById("legendeRecette");
let loupeBtn = document.getElementById("loupeBtn");
let titre = document.getElementById("titre");

// loupeBtn.addEventListener("click", rechercher);

// function rechercher() {
//   console.log(rechercheValue.value);
//   //   if (description.includes(rechercheValue.value)) {
//   //     alert("including!");
//   //   }
//   // });
// }

// function filter() {
//   loupeBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//  descriptions.forEach((description) => {
//   console.log(description);
//   rechercher(description.target .innerHTML);
//     console.log(e.target.innerHTML);
//   });

// hash.forEach((event) => {
//   event.addEventListener("keydown", function (e) {
//     if (e.key == "Enter") {
//       e.preventDefault();
//       chooseTag(e.target.innerHTML);
//       console.log(e.target.innerHTML);
//     }
//   });
// });
// }

// function rechercher(e) {
//   let descriptions = document.querySelectorAll(".description");
//   let recettes = document.querySelectorAll(".recette");

//   descriptions.forEach((description) => {
//     let includeResult = description.innerHTML.includes(e);
//     console.log(description.innerHTML);
//     console.log(includeResult);

//     tagsTab.forEach(function () {
//       if (includeResult === false) {
//         vignette.style.display = "none";
//       } else {
//         vignette.style.display = "flex";
//       }
//     });
//   });
// }

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  const data = await getData();
  afficherRecette(data);
}

init();
