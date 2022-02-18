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

  generateFiltersForAppliances(results);
  triIngredients.style.display = "none";
  triUstensiles.style.display = "none";
  triAppliance.style.display = "none";
};

const supprimerTagsAppliances = () => {
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
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);
        triIngredients.style.display = "none";
        triAppliance.style.display = "none";
        triUstensiles.style.display = "none";
      } else {
        results = recipes;
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);
        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
      }

      //récupération des tags
      let tagAppliances = document.querySelectorAll(".pAppliances");
      results = recipes.filter(
        (items) =>
          items.name.toLowerCase().includes(value) ||
          items.description.toLowerCase().includes(value) ||
          items.ingredients.forEach((ingredient) => {
            ingredientMap = ingredient.ingredient;
            ingredientMap.toLowerCase().includes(value);
          })
      );
      tagAppliances.forEach((tag) => {
        tagsAppResults = results.filter((recette) => {
          let applianceMap = [];
          applianceMap.push(recette.appliance.toLowerCase());
          return applianceMap.includes(tag.innerHTML);
        });
        results = tagsAppResults;
        displayRecette(tagsAppResults);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);
        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
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
  generateFiltersForIngredients(results);
  triAppliance.style.display = "none";
  triIngredients.style.display = "none";
  triUstensiles.style.display = "none";
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
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);
        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
      } else {
        results = recipes;
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);
        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
      }

      //récupération des tags
      tagIngredients = document.querySelectorAll(".pIngredients");

      tagIngredients.forEach((tag) => {
        results = recipes.filter(
          (items) =>
            items.name.toLowerCase().includes(value) ||
            items.description.toLowerCase().includes(value) ||
            items.ingredients.forEach((ingredient) => {
              ingredientMap = ingredient.ingredient;
              ingredientMap.toLowerCase().includes(value);
            })
        );
        tagsIngResults = results.filter((recette) => {
          let ingredientMap = [];
          recette.ingredients.forEach((ingredient) => {
            ingredientMap.push(ingredient.ingredient.toLowerCase());
          });
          return ingredientMap.includes(tag.innerHTML);
        });
        results = tagsIngResults;
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);
        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
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

  generateFiltersForUstensils(results);
  triAppliance.style.display = "none";
  triIngredients.style.display = "none";
  triUstensiles.style.display = "none";
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
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);
        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
      } else {
        results = recipes;
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);

        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
      }

      //récupération des tags
      tagsUstResults = document.querySelectorAll(".pUstensiles");
      tagsUstResults.forEach((tag) => {
        results = recipes.filter(
          (items) =>
            items.name.toLowerCase().includes(value) ||
            items.description.toLowerCase().includes(value) ||
            items.ingredients.forEach((ingredient) => {
              ingredientMap = ingredient.ingredient;
              ingredientMap.toLowerCase().includes(value);
            })
        );
        tagsUstResults = results.filter((recette) => {
          let ustensilMap = [];
          recette.ustensils.forEach((ustensil) => {
            ustensilMap.push(ustensil.toLowerCase());
          });
          return ustensilMap.includes(tag.innerHTML);
        });
        results = tagsUstResults;
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);
        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
      });
    });
  });
};
