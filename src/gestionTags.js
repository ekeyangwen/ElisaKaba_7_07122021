//création des tags
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
  //récupération de la fonction de MAJ des listes
  generateFiltersForAppliances(results);
  //Fermeture des dropbox pour MAJ
  triIngredients.style.display = "none";
  triUstensiles.style.display = "none";
  triAppliance.style.display = "none";
};

//Function de suppression des tags
const supprimerTagsAppliances = () => {
  crosses = document.querySelectorAll(".close");
  crosses.forEach((cross) => {
    cross.addEventListener("click", (e) => {
      e.target.parentNode.remove();

      //Relance la recherche principale
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
        //affiche les recettes de la recherche
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

      //Relance la recherche par tags
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
        //MAJ du tableau results en fonction des résultats
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

//création des tags
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

  //récupération de la fonction de MAJ des listes
  generateFiltersForIngredients(results);
  //Fermeture des dropbox pour MAJ
  triAppliance.style.display = "none";
  triIngredients.style.display = "none";
  triUstensiles.style.display = "none";
};

//Function de suppression des tags
const supprimerTagsIngredients = () => {
  crosses = document.querySelectorAll(".close");
  crosses.forEach((cross) => {
    cross.addEventListener("click", (e) => {
      e.target.parentNode.remove();

      //Relance la recherche principale
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
        //affiche les recettes en fonction des résultats de la recherche
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

      //Relance la recherche par tags
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

        //MAJ du tableau results en fonction des résultats de la recherche
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

//Création des tags
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
  //MAJ des liste en fonction du contenu de results
  generateFiltersForUstensils(results);
  //Fermeture des dropbox pour MAJ des liste
  triAppliance.style.display = "none";
  triIngredients.style.display = "none";
  triUstensiles.style.display = "none";
};

//Supression des tags
const supprimerTagsUstensiles = () => {
  crosses = document.querySelectorAll(".close");
  crosses.forEach((cross) => {
    cross.addEventListener("click", (e) => {
      e.target.parentNode.remove();

      //Relance la recherche principale
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
        //Affiche les recette en fonction des résultats de la recherche
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);
        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
      } else {
        //Si pas de résultat toute les recettes sont affichées
        results = recipes;
        displayRecette(results);
        generateFiltersForAppliances(results);
        generateFiltersForIngredients(results);
        generateFiltersForUstensils(results);

        triAppliance.style.display = "none";
        triIngredients.style.display = "none";
        triUstensiles.style.display = "none";
      }

      //Relance de la recherche par tags
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
