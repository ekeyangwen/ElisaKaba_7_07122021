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
  BtnIngredient = document.querySelector("#triBtnIngredients");
  BtnIngredient.addEventListener("click", afficherInputIngredient);
  inputIng.addEventListener("click", afficherInputIngredient);
  inputIng.addEventListener("keyup", afficherInputIngredient);

  function afficherInputIngredient(e) {
    e.preventDefault();
    triIngredients.innerHTML = "";
    if (triIngredients.innerHTML == "") {
      triIngredients.style.display = "flex";
      for (item of filteredIngredients) {
        listIng = document.createElement("li");
        listIng.classList.add("listIng");
        listIng.innerHTML = item;
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
  inputApp.addEventListener("click", afficherInputAppareils);
  inputApp.addEventListener("keyup", afficherInputAppareils);

  function afficherInputAppareils(e) {
    e.preventDefault();
    triAppliance.innerHTML = "";
    if (triAppliance.innerHTML == "") {
      triAppliance.style.display = "flex";
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
  inputUst.addEventListener("click", afficherInputUstensils);

  function afficherInputUstensils(e) {
    e.preventDefault();
    triUstensiles.innerHTML = "";
    if (triUstensiles.innerHTML == "") {
      triUstensiles.style.display = "flex";
      for (content of filteredUstensils) {
        listUst = document.createElement("li");
        listUst.classList.add("listUst");
        listUst.innerHTML = content;
        triUstensiles.appendChild(listUst);
      }
    }
    installEventUstensils();
  }
};
