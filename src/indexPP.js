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
};

// fonction de recherche
const recherche = (data) => {
  let ingredients = document.querySelectorAll(".listeIngredients");
  let descriptions = document.querySelectorAll(".description");
  let titre = document.querySelectorAll(".titre");
  let recettes = document.querySelectorAll(".recette");
  let rechercheValue = document.getElementById("barreRecherche");
  let input = document.querySelector("input");

  rechercheValue.addEventListener("keyup", Verif);

  function Verif() {
    if (input.value.length >= 3) {
      console.log(input.value);
      console.log("hello");
      chooseRecipe();
    }
  }

  // let includeTitre = titre.forEach((title) => {
  //   title.innerHTML.toLowerCase().includes(rechercheValue.value.toLowerCase());
  // });

  // let includeDescription = descriptions.forEach((description) => {
  //   description.innerHTML
  //     .toLowerCase()
  //     .includes(rechercheValue.value.toLowerCase());
  // });

  // let includeIngredients = ingredients.forEach((ingredient) => {
  //   ingredient.innerHTML
  //     .toLowerCase()
  //     .includes(rechercheValue.value.toLowerCase());
  // });

  function chooseRecipe() {
    console.log("Hello");
    data.recipes.forEach((recipe) => {
      let descriptionContent = recipe.description;
      let titleContent = recipe.name;
      console.log(recipe.name);
      let includeDescription = descriptionContent.includes(input.value);
      let includeTitle = titleContent.includes(input.value);
      //  let ingredientContent = ingredient.ingredient;
      //  let quantityContent = ingredient.quantity ? `:${ingredient.quantity}` : "";
      // console.log(descriptionContent);
      console.log(includeDescription);
      if (includeDescription === true || includeTitle === true) {
        // console.log(includeDescription);
        recettes.forEach((recette) => {
          recette.style.display = "flex";
        });
      } else {
        recettes.forEach((recette) => {
          recette.style.display = "none";
        });
      }
    }); // }
  }
};
// chooseRecipe();
// let includeTitre = titre.forEach((title) => {
//   title.innerHTML
//     .toLowerCase()
//     .includes(rechercheValue.value.toLowerCase());
//   // console.log(rechercheValue.value.toLowerCase());
//   // console.log(title.innerHTML.toLowerCase());
//   // console.log(
//   //   title.innerHTML
//   //     .toLowerCase()
//   //     .includes(rechercheValue.value.toLowerCase())
//   // );
// });
// // console.log(includeTitre);

// let includeDescription = descriptions.forEach((description) => {
//   description.innerHTML
//     .toLowerCase()
//     .includes(rechercheValue.value.toLowerCase());
//   // console.log(description.innerHTML);
// });
// // console.log(includeDescription);

// let includeIngredients = ingredients.forEach((ingredient) => {
//   ingredient.innerHTML
//     .toLowerCase()
//     .includes(rechercheValue.value.toLowerCase());
// console.log(
//   ingredient.innerHTML
//     .toLowerCase()
//     .includes(rechercheValue.value.toLowerCase())
// );
// });

//   recettes.forEach((recette) => {
//     console.log("Hello");
//     if (
//       includeTitre === false ||
//       includeDescription === false ||
//       includeIngredients === false
//     ) {
//       console.log(includeTitre === false);
//       recette.style.display = "none";
//     }
//     if (includeTitre === true) {
//       recette.style.display = "none";
//     }
//   });

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
  recherche(data);
}

init();
