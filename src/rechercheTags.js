let listeAppliance = document.querySelectorAll(".listApp");
let listeIngredients = document.querySelectorAll(".listIng");
let listeUstensiles = document.querySelectorAll(".listUst");
let tagsAppResults = [];
let tagsUstResults = [];
let tagsIngResults = [];
let ingredientMap = [];
let appareilsResult;
let pAppliance;
let spanAppliances = document.querySelectorAll(".spanAppliances");
let pAppliances = document.querySelectorAll(".pAppliances");

let pIngredients = document.querySelectorAll(".pIngredients");
let spanUstensiles = document.querySelectorAll(".spanUstensiles");
let pUstensiles = document.querySelectorAll(".pUstensiles");
let close = document.querySelectorAll(".close");
let p;
let eventValue = [];

results = recipes.filter(
  (items) =>
    items.name.toLowerCase().includes(value) ||
    items.description.toLowerCase().includes(value) ||
    items.ingredients.forEach((ingredient) => {
      ingredientMap = ingredient.ingredient;
      ingredientMap.toLowerCase().includes(value);
    })
);
if (results.length == 0) {
  results = recipes;
}

//Event et recherche par tags
const installEventAppliances = () => {
  listeAppliance = document.querySelectorAll(".listApp");
  listeAppliance.forEach((appliance) => {
    appliance.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML.toLowerCase();
      tagsAppResults = results.filter((recette) => {
        let applianceMap = [];
        applianceMap.push(recette.appliance.toLowerCase());
        return applianceMap.includes(eventValue);
      });
      //MAJ de results en fonction des résultats de la recherche par tags
      results = tagsAppResults;
      //Rappel des fonction assurant le bon comportement du tag (affichage et suppression)
      afficherTagsAppliances();
      supprimerTagsAppliances();
      //Affichage des recette en fonction des résultats
      displayRecette(results);
      //MAJ des liste des dropbox
      generateFiltersForAppliances(results);
      generateFiltersForIngredients(results);
      generateFiltersForUstensils(results);
    });
  });
};

//cf. installEventAppliance
const installEventUstensils = () => {
  listeUstensiles = document.querySelectorAll(".listUst");
  listeUstensiles.forEach((ustensil) => {
    ustensil.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML.toLowerCase();
      tagsUstResults = results.filter((recette) => {
        let ustensilMap = [];
        recette.ustensils.forEach((ustensil) => {
          ustensilMap.push(ustensil.toLowerCase());
        });
        return ustensilMap.includes(eventValue);
      });
      results = tagsUstResults;
      afficherTagsUstensiles();
      supprimerTagsUstensiles();
      console.log(tagsUstResults);
      displayRecette(results);
      generateFiltersForAppliances(results);
      generateFiltersForIngredients(results);
      generateFiltersForUstensils(results);
    });
  });
};

//cf. installEventAppliance
const installEventIngredients = () => {
  listeIngredients = document.querySelectorAll(".listIng");
  listeIngredients.forEach((ingredient) => {
    ingredient.addEventListener("click", function (e) {
      eventValue = e.target.innerHTML.toLowerCase();
      tagsIngResults = results.filter((recette) => {
        let ingredientMap = [];
        recette.ingredients.forEach((ingredient) => {
          ingredientMap.push(ingredient.ingredient.toLowerCase());
        });
        return ingredientMap.includes(eventValue);
      });
      results = tagsIngResults;
      afficherTagsIngredients();
      supprimerTagsIngredients();
      console.log(tagsIngResults);
      displayRecette(results);
      generateFiltersForAppliances(results);
      generateFiltersForIngredients(results);
      generateFiltersForUstensils(results);
    });
  });
};
