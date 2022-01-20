const generateFiltersForIngredients = (recipes) => {
  recipes.filter((elem) => {
    elem.ingredients.map((ingredient) => {
      ingredientMap = ingredient.ingredient;
      ingredientsT.push(ingredientMap);
      ingredientsT.sort();
    });
  });
  const filteredIngredients = new Set(ingredientsT);
  ingredientsFiltered.push(filteredIngredients);
  console.log(ingredientsFiltered);
  inputIng = document.querySelector("#inputIngredients");
  BtnIngredient = document.querySelector("#triBtnIngredients");
  BtnIngredient.addEventListener("click", AfficherInputIngredients);
  inputIng.addEventListener("click", AfficherInputIngredients);

  function AfficherInputIngredients(e) {
    e.preventDefault();
    if (triIngredients.innerHTML == "") {
      for (item of filteredIngredients) {
        listIng = document.createElement("li");
        listIng.classList.add("listeIng");
        listIng.innerHTML = item;
        triIngredients.appendChild(listIng);
      }
    } else {
      triIngredients.innerHTML = "";
    }
    installEventIngredients();
  }
};

const generateFiltersForAppliance = (recipes) => {
  for (recette of recipes) {
    applianceT.push(recette.appliance);
    applianceT.sort();
  }

  const filteredAppliance = new Set(applianceT);

  inputApp = document.querySelector("#inputAppareils");
  BtnAppareils = document.getElementById("triBtnAppareil");
  BtnAppareils.addEventListener("click", AfficherInputAppareils);
  inputApp.addEventListener("click", AfficherInputAppareils);

  function AfficherInputAppareils(e) {
    e.preventDefault();
    const triAppliance = document.getElementById("triAppareilsInput");
    if (triAppliance.innerHTML == "") {
      for (elem of filteredAppliance) {
        list = document.createElement("li");
        list.classList.add("listeApp");
        list.innerHTML = elem;
        triAppliance.appendChild(list);
      }
    } else {
      triAppliance.innerHTML = "";
    }
    installEventAppliance();
  }
};

const generateFiltersForUstensils = (recipes) => {
  recipes.filter((content) => {
    content.ustensils.map((ustensil) => {
      ustensilsT.push(ustensil);
      ustensilsT.sort();
    });
  });
  const filteredUstensils = new Set(ustensilsT);

  BtnUstensiles.addEventListener("click", AfficherInputUstensiles);
  inputUst.addEventListener("click", AfficherInputUstensiles);

  function AfficherInputUstensiles(e) {
    e.preventDefault();
    const triUstensiles = document.getElementById("triUstensilesInput");
    if (triUstensiles.innerHTML == "") {
      for (content of filteredUstensils) {
        list = document.createElement("li");
        list.classList.add("listeUst");
        list.innerHTML = content;
        triUstensiles.appendChild(list);
      }
    } else {
      triUstensiles.innerHTML = "";
    }
    installEventUstensils();
  }
};
