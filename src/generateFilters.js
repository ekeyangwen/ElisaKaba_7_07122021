const generateFiltersForIngredients = (recipes) => {
  recipes.forEach((recette) => {
    recette.ingredients.forEach((ingredient) => {
      ingredientsT.push(ingredient.ingredient);
      ingredientsT.sort();
      console.log(ingredientsT);
    });
  });

  const filteredIngredients = new Set(ingredientsT);
  console.log("==> filteredIngredients:", filteredIngredients);

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
  recipes.forEach((recette) => {
    applianceT.push(recette.appliance);
    applianceT.sort();
  });

  const filteredAppliance = new Set(applianceT);
  console.log("==> filteredAppliance:", filteredAppliance);

  inputApp = document.querySelector("#inputAppareils");
  BtnAppareils = document.getElementById("triBtnAppareil");
  BtnAppareils.addEventListener("click", AfficherInputAppareils);
  inputApp.addEventListener("click", AfficherInputAppareils);

  function AfficherInputAppareils(e) {
    e.preventDefault();
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
    installEventAppliances();
  }
};

const generateFiltersForUstensils = (recipes) => {
  recipes.forEach((recette) => {
    recette.ustensils.forEach((ustensil) => {
      ustensilsT.push(ustensil);
      ustensilsT.sort();
    });
  });

  const filteredUstensils = new Set(ustensilsT);
  console.log("==> filteredUstensils:", filteredUstensils);

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
      inputIng.innerHTML = "";
    }

    installEventUstensils();
  }
};
