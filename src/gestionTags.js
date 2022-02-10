const afficherTagsAppliances = () => {
  appareilsResult = document.querySelector("#appareilsResult");
  spanApp = document.createElement("span");
  spanApp.setAttribute("class", "spanAppliances");
  appareilsResult.appendChild(spanApp);
  pApp = document.createElement("p");
  pApp.setAttribute("class", "pAppliances");
  pApp.innerHTML = eventValue;
  spanAppliances = document.querySelectorAll(".spanAppliances");
  spanAppliances.forEach((appliance) => {
    appliance.appendChild(pApp);
  });
  img = document.createElement("img");
  img.src = "./img/croix_fermeture_tag.png";
  img.setAttribute("class", "close");
  spanAppliances.forEach((appliance) => {
    appliance.appendChild(img);
  });
  fermerDropBox();
  generateFiltersForAppliances(tagsAppResults);
};

const supprimerTagsAppliances = () => {
  pAppliances = document.querySelectorAll(".pAppliances");

  crosses = document.querySelectorAll(".close");
  crosses.forEach((cross) => {
    cross.addEventListener("click", (e) => {
      e.target.parentNode.remove();

      //recherche principale

      let input = document.querySelector("input");
      let value = input.value.toLowerCase();
      if (value.length >= 3) {
        results = recipes.filter(
          (items) =>
            items.name.toLowerCase().includes(value) ||
            items.description.toLowerCase().includes(value) ||
            items.ingredients.forEach((ingredient) => {
              ingredientMap = ingredient.ingredient;
              ingredientMap.toLowerCase().includes(value);
            })
        );
        fermerDropBox();
        displayRecette(results);
        generateFiltersForAppliances(results);
      } else {
        results = recipes;
        fermerDropBox();
        displayRecette(results);
        generateFiltersForAppliances(results);
      }

      //récupération des tags
      let tagAppliances = document.querySelectorAll(".pAppliances");
      tagAppliances.forEach((tag) => {
        console.log(tag.innerHTML);
        tagsAppResults = results.filter((recette) => {
          let applianceMap = [];
          applianceMap.push(recette.appliance.toLowerCase());
          console.log(tag.innerHTML);
          return applianceMap.includes(tag.innerHTML);
        });
        fermerDropBox();
        displayRecette(tagsAppResults);
        generateFiltersForAppliances(tagsAppResults);
      });
    });
  });
};
const afficherTagsIngredients = () => {
  ingredientsResult = document.querySelector("#ingredientsResult");
  spanIng = document.createElement("span");
  spanIng.setAttribute("class", "spanIngredients");
  ingredientsResult.appendChild(spanIng);
  pIng = document.createElement("p");
  pIng.setAttribute("class", "pIngredients");
  pIng.innerHTML = eventValue;
  spanIngredients = document.querySelectorAll(".spanIngredients");
  spanIngredients.forEach((ingredient) => {
    ingredient.appendChild(pIng);
  });
  img = document.createElement("img");
  img.src = "./img/croix_fermeture_tag.png";
  img.setAttribute("class", "close");
  spanIngredients.forEach((ingredient) => {
    ingredient.appendChild(img);
  });
  fermerDropBox();
  generateFiltersForAppliances(tagsIngResults);
};

const supprimerTagsIngredients = () => {
  crosses = document.querySelectorAll(".close");
  crosses.forEach((cross) => {
    cross.addEventListener("click", (e) => {
      e.target.parentNode.remove();

      //recherche principale

      let input = document.querySelector("input");
      let value = input.value.toLowerCase();
      if (value.length >= 3) {
        results = recipes.filter(
          (items) =>
            items.name.toLowerCase().includes(value) ||
            items.description.toLowerCase().includes(value) ||
            items.ingredients.forEach((ingredient) => {
              ingredientMap = ingredient.ingredient;
              ingredientMap.toLowerCase().includes(value);
            })
        );
        fermerDropBox();
        displayRecette(results);
        generateFiltersForIngredients(results);
      } else {
        results = recipes;
        fermerDropBox();
        displayRecette(results);
        generateFiltersForIngredients(results);
      }

      //récupération des tags
      tagIngredients = document.querySelectorAll(".pIngredients");
      tagIngredients.forEach((tag) => {
        tagsIngResults = results.filter((recette) => {
          let ingredientMap = [];
          recette.ingredients.forEach((ingredient) => {
            ingredientMap.push(ingredient.ingredient.toLowerCase());
          });
          return ingredientMap.includes(tag.innerHTML);
        });
        fermerDropBox();
        console.log(tagsIngResults);
        displayRecette(tagsIngResults);
        generateFiltersForIngredients(tagsIngResults);
      });
    });
  });
};

const afficherTagsUstensiles = () => {
  ustensilesResult = document.querySelector("#ustensilesResult");
  spanUst = document.createElement("span");
  spanUst.setAttribute("class", "spanUstensiles");
  ustensilesResult.appendChild(spanUst);
  pUst = document.createElement("p");
  pUst.setAttribute("class", "pUstensiles");
  pUst.innerHTML = eventValue;
  spanUstensiles = document.querySelectorAll(".spanUstensiles");
  spanUstensiles.forEach((ustensile) => {
    ustensile.appendChild(pUst);
  });
  img = document.createElement("img");
  img.src = "./img/croix_fermeture_tag.png";
  img.setAttribute("class", "close");
  spanUstensiles.forEach((ustensile) => {
    ustensile.appendChild(img);
  });
  fermerDropBox();
  generateFiltersForUstensils(tagsAppResults);
};

const supprimerTagsUstensiles = () => {
  crosses = document.querySelectorAll(".close");
  crosses.forEach((cross) => {
    cross.addEventListener("click", (e) => {
      e.target.parentNode.remove();

      //recherche principale

      let input = document.querySelector("input");
      let value = input.value.toLowerCase();
      if (value.length >= 3) {
        results = recipes.filter(
          (items) =>
            items.name.toLowerCase().includes(value) ||
            items.description.toLowerCase().includes(value) ||
            items.ingredients.forEach((ingredient) => {
              ingredientMap = ingredient.ingredient;
              ingredientMap.toLowerCase().includes(value);
            })
        );
        fermerDropBox();
        displayRecette(results);
        generateFiltersForUstensils(results);
      } else {
        results = recipes;
        fermerDropBox();
        displayRecette(results);
        generateFiltersForUstensils(results);
      }

      //récupération des tags
      tagsUstResults = document.querySelectorAll(".pUstensiles");
      tagsUstResults.forEach((tag) => {
        tagsUstResults = recipes.filter((recette) => {
          let ustensilMap = [];
          recette.ustensils.forEach((ustensil) => {
            ustensilMap.push(ustensil.toLowerCase());
          });
          return ustensilMap.includes(eventValue);
        });
        fermerDropBox();
        console.log(tagsUstResults);
        displayRecette(tagsUstResults);
        generateFiltersForUstensils(tagsUstResults);
      });
    });
  });
};
