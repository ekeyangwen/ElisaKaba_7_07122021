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
let listAppareils = document.querySelector("#listAppareils");

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
  BtnIngredient = document.getElementById("triBtnIngredients");
  BtnIngredient.addEventListener("click", afficherInputIngredients);
  inputIng.addEventListener("click", afficherInputIngredients);

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

const afficherKeyupIngredients = () => {
  inputIng = document.querySelector("#inputIngredients");
  BtnIngredient = document.getElementById("triBtnIngredients");
  BtnIngredient.addEventListener(
    "click",
    afficherKeyupIngredientsWithPreventDefault
  );
  inputIng.addEventListener(
    "click",
    afficherKeyupIngredientsWithPreventDefault
  );
  function afficherKeyupIngredientsWithPreventDefault(e) {
    e.preventDefault();

    let listIngredient = document.querySelector("#listIngredients");
    if (listIngredient.getAttribute("value") == "false") {
      triIngredients.style.display = "none";

      console.log("display===none");
      listIngredient.setAttribute("value", "true");
    } else {
      triIngredients.style.display = "flex";
      console.log("display===flex");
      listIngredient.setAttribute("value", "false");
    }
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
  inputApp.addEventListener("click", afficherInputAppareils);
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
const afficherKeyupAppareils = () => {
  inputApp = document.querySelector("#inputAppareils");
  BtnAppareils = document.getElementById("triBtnAppareil");
  inputApp.addEventListener("click", afficherKeyupAppareilsWithPreventDefault);
  BtnAppareils.addEventListener(
    "click",
    afficherKeyupAppareilsWithPreventDefault
  );

  function afficherKeyupAppareilsWithPreventDefault(e) {
    e.preventDefault();
    let listAppareils = document.querySelector("#listAppareils");
    if (listAppareils.getAttribute("value") == "false") {
      triAppliance.style.display = "flex";
      console.log("display===flex");
      listAppareils.setAttribute("value", "true");
    } else {
      triAppliance.style.display = "none";
      console.log("display===none");
      console.log(listIngredient);
      listAppareils.setAttribute("value", "false");
    }
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
  inputUst.addEventListener("click", afficherInputUstensils);

  function afficherInputUstensils(e) {
    e.preventDefault();
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
const afficherKeyupUstensils = () => {
  inputUst.addEventListener("click", afficherKeyupUstensilesWithPreventDefault);
  BtnUstensiles.addEventListener(
    "click",
    afficherKeyupUstensilesWithPreventDefault
  );

  function afficherKeyupUstensilesWithPreventDefault(e) {
    e.preventDefault();
    let listUstensiles = document.querySelector("#listUstensiles");
    if (listUstensiles.getAttribute("value") == "false") {
      triUstensiles.style.display = "flex";
      listUstensiles.setAttribute("value", "true");
      console.log("display===flex");
    } else {
      triUstensiles.style.display = "none";
      listUstensiles.setAttribute("value", "false");
      console.log("display===none");
    }
  }
};
