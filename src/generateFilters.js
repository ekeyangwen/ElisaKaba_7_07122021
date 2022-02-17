let ingredientsT = [];
let applianceT = [];
let ustensilsT = [];
let BtnIngredient;
let listIng;
let BtnAppareils;
let inputApp;
let item;
let recette;
let elem;
let BtnUstensiles = document.getElementById("triBtnUstensiles");
let inputUst = document.querySelector("#inputUstensiles");
let inputIng;
let content;
const triIngredients = document.getElementById("triIngredientsInput");
const triAppliance = document.getElementById("triAppareilsInput");
const triUstensiles = document.getElementById("triUstensilesInput");
let listIngredient = document.querySelector("#listIngredients");

const generateFiltersForIngredients = (recipes) => {
  ingredientsT = [];
  recipes.forEach((recette) => {
    recette.ingredients.forEach((ingredient) => {
      ingredientsT.push(ingredient.ingredient);
      ingredientsT.sort();
    });
  });

  const filteredIngredients = new Set(ingredientsT);

  inputIng = document.querySelector("#inputIngredients");
  BtnIngredients = document.getElementById("triBtnIngredients");
  BtnIngredients.addEventListener("click", afficherInputIngredients);
  inputIng.addEventListener("click", afficherInputIngredients);
  BtnIngredients.addEventListener("click", afficherKeyupIngredients);
  inputIng.addEventListener("click", afficherKeyupIngredients);

  function afficherKeyupIngredients(e) {
    e.preventDefault();
    let listIngredient = document.querySelector("#listIngredients");
    if (listIngredient.getAttribute("value") == "false") {
      triIngredients.style.display = "flex";
      afficherInputIngredients(results);
      console.log("display===flex");
      listIngredient.setAttribute("value", "true");
    } else {
      triIngredients.style.display = "none";
      console.log("display===none");
      listIngredient.setAttribute("value", "false");
    }
  }

  function afficherInputIngredients() {
    triIngredients.innerHTML = "";
    if (triIngredients.innerHTML == "") {
      for (elem of filteredIngredients) {
        listIng = document.createElement("li");
        listIng.classList.add("listIng");
        listIng.innerHTML = elem;
        triIngredients.appendChild(listIng);
      }
    }
    installEventIngredients();
  }
};

const generateFiltersForAppliances = (recipes) => {
  applianceT = [];
  recipes.forEach((recette) => {
    applianceT.push(recette.appliance);
    applianceT.sort();
  });

  const filteredAppliances = new Set(applianceT);
  inputApp = document.querySelector("#inputAppareils");
  BtnAppareils = document.getElementById("triBtnAppareil");
  BtnAppareils.addEventListener("click", afficherInputAppareils);
  inputApp.addEventListener("click", afficherKeyupAppareils);
  BtnAppareils.addEventListener("click", afficherKeyupAppareils);

  function afficherKeyupAppareils(e) {
    e.preventDefault();
    let listAppareils = document.querySelector("#listAppareils");
    if (listAppareils.getAttribute("value") == "false") {
      triAppliance.style.display = "flex";
      afficherInputAppareils(results);
      listAppareils.setAttribute("value", "true");
      console.log("display===flex");
    } else {
      triAppliance.style.display = "none";
      listAppareils.setAttribute("value", "false");
      console.log("display===none");
    }
  }
  function afficherInputAppareils() {
    triAppliance.innerHTML = "";
    if (triAppliance.innerHTML == "") {
      for (elem of filteredAppliances) {
        listApp = document.createElement("li");
        listApp.classList.add("listApp");
        listApp.innerHTML = elem;
        triAppliance.appendChild(listApp);
      }
    }

    installEventAppliances();
  }
};

const generateFiltersForUstensils = (recipes) => {
  ustensilsT = [];
  recipes.forEach((recette) => {
    recette.ustensils.forEach((ustensil) => {
      ustensilsT.push(ustensil);
      ustensilsT.sort();
    });
  });

  const filteredUstensils = new Set(ustensilsT);

  inputUst = document.querySelector("#inputUstensiles");
  BtnUstensiles = document.getElementById("triBtnUstensiles");
  BtnUstensiles.addEventListener("click", afficherInputUstensils);
  inputUst.addEventListener("click", afficherKeyupUstensils);
  BtnUstensiles.addEventListener("click", afficherKeyupUstensils);
  inputUst.addEventListener("keyup", afficherKeyupUstensils);

  function afficherKeyupUstensils(e) {
    e.preventDefault();
    let listUstensiles = document.querySelector("#listUstensiles");
    if (listUstensiles.getAttribute("value") == "false") {
      triUstensiles.style.display = "flex";
      afficherInputUstensils(results);
      listUstensiles.setAttribute("value", "true");
      console.log("display===flex");
    } else {
      triUstensiles.style.display = "none";
      listUstensiles.setAttribute("value", "false");
      console.log("display===none");
    }
  }
  function afficherInputUstensils() {
    triUstensiles.innerHTML = "";
    if (triUstensiles.innerHTML == "") {
      for (elem of filteredUstensils) {
        listUst = document.createElement("li");
        listUst.classList.add("listUst");
        listUst.innerHTML = elem;
        triUstensiles.appendChild(listUst);
      }
    }

    installEventUstensils();
  }
};
