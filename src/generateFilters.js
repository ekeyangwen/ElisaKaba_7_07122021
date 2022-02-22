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

//base de la création de la liste déroulante d'ingredients:
const generateFiltersForIngredients = (recipes) => {
  ingredientsT = [];
  recipes.forEach((recette) => {
    recette.ingredients.forEach((ingredient) => {
      ingredientsT.push(ingredient.ingredient);
      ingredientsT.sort();
    });
  });

  //suppression des doublons
  const filteredIngredients = new Set(ingredientsT);

  //event pour afficher liste ingredients
  inputIng = document.querySelector("#inputIngredients");
  BtnIngredient = document.getElementById("triBtnIngredients");
  BtnIngredient.addEventListener("click", afficherInputIngredients);
  inputIng.addEventListener("click", afficherInputIngredients);

  //création et affichage de la liste d'ingrédients
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

//Event pour ouverture et fermeture de la liste (dropbox)
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

  //Function, gestion ouverture et fermeture de la liste (dropbox)
  function afficherKeyupIngredientsWithPreventDefault(e) {
    e.preventDefault();

    let listIngredient = document.querySelector("#listIngredients");
    if (listIngredient.getAttribute("value") == "false") {
      triIngredients.style.display = "flex";
      //changement du placeholder
      document.getElementsByName("triIngredients")[0].placeholder =
        "Rechercher un ingredient";
      console.log("display===none");
      listIngredient.setAttribute("value", "true");
    } else {
      triIngredients.style.display = "none";
      document.getElementsByName("triIngredients")[0].placeholder =
        "Ingredients";
      console.log("display===flex");
      listIngredient.setAttribute("value", "false");
    }
  }
};

//base de la création de la liste déroulante d'appareils:
const generateFiltersForAppliances = (recipes) => {
  applianceT = [];
  recipes.forEach((recette) => {
    applianceT.push(recette.appliance);
    applianceT.sort();
  });

  //suppression des doublons
  const filteredAppliances = new Set(applianceT);

  //event pour afficher liste appareils
  inputApp = document.querySelector("#inputAppareils");
  BtnAppareils = document.getElementById("triBtnAppareil");
  BtnAppareils.addEventListener("click", afficherInputAppareils);
  inputApp.addEventListener("click", afficherInputAppareils);

  //création et affichage de la liste d'appareils
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
//Event pour ouverture et fermeture de la liste (dropbox)
const afficherKeyupAppareils = () => {
  inputApp = document.querySelector("#inputAppareils");
  BtnAppareils = document.getElementById("triBtnAppareil");
  inputApp.addEventListener("click", afficherKeyupAppareilsWithPreventDefault);
  BtnAppareils.addEventListener(
    "click",
    afficherKeyupAppareilsWithPreventDefault
  );

  //Function, gestion ouverture et fermeture de la liste (dropbox)
  function afficherKeyupAppareilsWithPreventDefault(e) {
    e.preventDefault();
    let listAppareils = document.querySelector("#listAppareils");
    if (listAppareils.getAttribute("value") == "false") {
      triAppliance.style.display = "flex";
      //changement du placeholder
      document.getElementsByName("triAppareils")[0].placeholder =
        "Rechercher un appareil";
      console.log("display===flex");
      listAppareils.setAttribute("value", "true");
    } else {
      triAppliance.style.display = "none";
      document.getElementsByName("triAppareils")[0].placeholder = "Appareils";
      console.log("display===none");
      console.log(listIngredient);
      listAppareils.setAttribute("value", "false");
    }
  }
};

//base de la création de la liste déroulante d'ustensiles:
const generateFiltersForUstensils = (recipes) => {
  ustensilsT = [];
  recipes.forEach((recette) => {
    recette.ustensils.forEach((ustensil) => {
      ustensilsT.push(ustensil);
      ustensilsT.sort();
    });
  });

  //suppression des doublons
  const filteredUstensils = new Set(ustensilsT);

  //event pour afficher liste ustensiles
  inputUst = document.querySelector("#inputUstensiles");
  BtnUstensiles = document.getElementById("triBtnUstensiles");
  BtnUstensiles.addEventListener("click", afficherInputUstensils);
  inputUst.addEventListener("click", afficherInputUstensils);

  //création et affichage de la liste d'ustensiles
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

//Event pour ouverture et fermeture de la liste (dropbox)
const afficherKeyupUstensils = () => {
  inputUst.addEventListener("click", afficherKeyupUstensilesWithPreventDefault);
  BtnUstensiles.addEventListener(
    "click",
    afficherKeyupUstensilesWithPreventDefault
  );

  //Function, gestion ouverture et fermeture de la liste (dropbox)
  function afficherKeyupUstensilesWithPreventDefault(e) {
    e.preventDefault();
    let listUstensiles = document.querySelector("#listUstensiles");
    if (listUstensiles.getAttribute("value") == "false") {
      triUstensiles.style.display = "flex";
      let triUstensilesInput = document.querySelector("#triUstensilesInput");
      triUstensilesInput.style.zIndex = 200;
      document.getElementsByName("triUstensiles")[0].placeholder =
        "Rechercher un ustensile";

      listUstensiles.setAttribute("value", "true");
      console.log("display===flex");
    } else {
      triUstensiles.style.display = "none";
      document.getElementsByName("triUstensiles")[0].placeholder = "Ustensiles";
      listUstensiles.setAttribute("value", "false");
      console.log("display===none");
    }
  }
};
