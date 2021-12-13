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
    let main = document.getElementById("main");
    main.innerHTML += newRecette.createRecipe();
  }

  // let eachRecette = data.recipes.filter((recipe) => recipe.id);
  // console.log(eachRecette);

  //récuoération des ingredients
  let i = 0;
  // for (i; i < data.recipes[i].ingredients.length; ++i) {
  for (let ingredient of data.recipes[i].ingredients) {
    console.log(ingredient);
    let singleIngredient = new recipe(ingredient);
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
    }
    points.forEach((point) => {
      if (qtite.innerHTML === "undefined") {
        point.style.display = "none";
      } else {
        point.style.display = "block";
      }
    });
  });

  units.forEach((unit) => {
    if (unit.innerHTML === "undefined") {
      unit.style.display = "none";
    }
  });
  // }
};

// fonction pour changer l'apparence de la barre de recherche (focus/perte de focus)
const styleBarreRecherche = () => {
  let rechercheValue = document.getElementById("barreRecherche");
  let loupeBtn = document.getElementById("loupeBtn");
  loupeBtn.addEventListener("click", effacerMessage);
  rechercheValue.addEventListener("click", effacerMessage);
  rechercheValue.onblur = afficherMessage;

  function effacerMessage() {
    if (rechercheValue.value === rechercheValue.defaultValue) {
      rechercheValue.value = "";
    }
  }

  function afficherMessage() {
    if (rechercheValue.value === "")
      rechercheValue.value = rechercheValue.defaultValue;
  }
};

const recherche = () => {
  let ingredients = document.querySelectorAll(".listeIngredients");
  let descriptions = document.querySelectorAll(".description");
  let titre = document.querySelectorAll(".titre");
  let recettes = document.querySelectorAll(".recette");

  let rechercheValue = document.getElementById("barreRecherche");

  loupeBtn.addEventListener("click", function (e) {
    e.preventDefault(rechercheValue.value);
    chooseRecipe(rechercheValue);
    console.log(rechercheValue.value);
  });

  function chooseRecipe(rechercheValue) {
    let includeTitre = titre.forEach((title) => {
      title.innerHTML.includes(rechercheValue.value);
    });

    let includeDescription = descriptions.forEach((description) => {
      description.innerHTML.includes(rechercheValue.value);
    });

    let includesIngredients = ingredients.forEach((ingredient) => {
      ingredient.innerHTML.includes(rechercheValue.value);
    });

    recettes.forEach((recette) => {
      console.log(recette);
      if (
        includeTitre == true ||
        includeDescription == true ||
        includesIngredients == true
      ) {
        recette.style.display = "flex";
      } else {
        recette.style.display = "none";
      }
    });
  }
};

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
  styleBarreRecherche();
  recherche();
}

init();
