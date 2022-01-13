import { recipe } from "./recettes.js";
import { recipes } from "./Recipes.js";

// fonction pour créer les fiches recettes
export function displayRecette(recipes) {
  listeRecettes.innerHTML = "";
  recipes.forEach((recette) => {
    let newRecette = new recipe(recette);
    let listeRecettes = document.getElementById("listeRecettes");
    listeRecettes.innerHTML += newRecette.createRecipe();
  });
}

// let applianceRecherche = event.target.value;
// let applianceResults = applianceT.filter((appliance) =>
//   appliance.toLowerCase().includes(applianceRecherche)
// );

// let ulUstensils = document.getElementById("triUstensilesInput");
// ulUstensils.addEventListener("click", function (event) {
//   let target = event.target;
//   let Utag = document.getElementById("listUstensiles");
//   Utag.innerHTML = target.innerHTML;
//   Utag.style.display = "block";

//   let value = event.path[0].innerHTML;
// });

// let ulIngredients = document.getElementById("triIngredientsInput");
// ulIngredients.addEventListener("click", function (event) {
//   let target = event.target;
//   let Itag = document.getElementById("listIngredients");
//   Itag.innerHTML = target.innerHTML;
//   Itag.style.display = "block";

//   let value = event.path[0].innerHTML;

//   let IngItem = recipes.filter((items) =>
//     items.ingredients.forEach((ingredient) => {
//       let ingredientMap = ingredient.ingredient;
//       console.log(ingredientMap);
//       ingredientMap.toLowerCase().includes(value.toLowerCase());
//     })
//   );
//   console.log(IngItem);
//   displayRecette(IngItem);
// });

// let ulAppareils = document.getElementById("triApplianceInput");
// ulAppareils.addEventListener("click", function (event) {
//   let target = event.target;
//   console.log(target);
//   let Atag = document.getElementById("listAppareils");
//   Atag.innerHTML = target.innerHTML;
//   Atag.style.display = "block";

//   let value = event.path[0].innerHTML;

//   let AppItem = recipes.filter((recipe) =>
//     recipe.appliance.toLowerCase().includes(value.toLowerCase())
//   );
//   console.log(AppItem);
//   displayRecette(AppItem);
// });

// fonction globale d'intialisation de toutes les fonctions
async function init() {
  displayRecette(recipes);
}

init();
