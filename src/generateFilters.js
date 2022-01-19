const generateFilters = (recipes) => {
  let ingredientsT = [];
  let applianceT = [];
  let ustensilsT = [];

  recipes.filter((elem) => {
    elem.ingredients.map((ingredient) => {
      let ingredientMap = ingredient.ingredient;
      ingredientsT.push(ingredientMap);
      ingredientsT.sort();
    });
  });

  const filteredIngredients = new Set(ingredientsT);

  let BtnIngredient = document.getElementById("triBtnIngredients");
  inputIng = document.querySelector("#inputIngredients");
  BtnIngredient.addEventListener("click", AfficherInputIngredients);
  inputIng.addEventListener("click", AfficherInputIngredients);

  function AfficherInputIngredients(e) {
    e.preventDefault();
    const triIngredients = document.getElementById("triIngredientsInput");
    if (triIngredients.innerHTML == "") {
      for (let item of filteredIngredients) {
        let list = document.createElement("li");
        list.classList.add("listeIng");
        list.innerHTML = item;
        triIngredients.appendChild(list);
      }
    } else {
      triIngredients.innerHTML = "";
    }
    installEventIngredients();
  }

  for (let recette of recipes) {
    applianceT.push(recette.appliance);
    applianceT.sort();
  }

  const filteredAppliance = new Set(applianceT);

  let BtnAppareils = document.getElementById("triBtnAppareil");
  let inputApp = document.querySelector("#inputAppareils");
  BtnAppareils.addEventListener("click", AfficherInputAppareils);
  inputApp.addEventListener("click", AfficherInputAppareils);

  function AfficherInputAppareils(e) {
    e.preventDefault();
    const triAppliance = document.getElementById("triAppareilsInput");
    if (triAppliance.innerHTML == "") {
      for (let elem of filteredAppliance) {
        let list = document.createElement("li");
        list.classList.add("listeApp");
        list.innerHTML = elem;
        triAppliance.appendChild(list);
      }
    } else {
      triAppliance.innerHTML = "";
    }
    installEventAppliance();
  }

  recipes.filter((content) => {
    content.ustensils.map((ustensil) => {
      ustensilsT.push(ustensil);
      ustensilsT.sort();
    });
  });
  const filteredUstensils = new Set(ustensilsT);

  let BtnUstensiles = document.getElementById("triBtnUstensiles");
  let inputUst = document.querySelector("#inputUstensiles");
  BtnUstensiles.addEventListener("click", AfficherInputUstensiles);
  inputUst.addEventListener("click", AfficherInputUstensiles);

  function AfficherInputUstensiles(e) {
    e.preventDefault();
    const triUstensiles = document.getElementById("triUstensilesInput");
    if (triUstensiles.innerHTML == "") {
      for (let content of filteredUstensils) {
        let list = document.createElement("li");
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
