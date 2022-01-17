import { recipes } from "./Recipes.js";
import { displayRecette } from "./index.js";
import { value } from "./rechercheGlobale.js";

let listeApps = document.querySelectorAll(".listeApp");
listeApps.forEach((liste) => {
  liste.addEventListener("click", recherche);
});

function recherche(value) {
  let tagsResults = recipes.filter((items) =>
    items.appliance.toLowerCase().includes(value)
  );

  console.log(tagsResults);
  displayRecette(tagsResults);
  if (value.length == 0) {
    displayRecette(recipes);
  }
}
