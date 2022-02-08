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
};

const supprimerTagsAppliances = () => {
  pAppliances = document.querySelectorAll(".pAppliances");

  crosses = document.querySelectorAll(".close");
  crosses.forEach((cross) => {
    cross.addEventListener("click", (e) => {
      let tagToRemove = e.target.previousSibling.innerHTML;
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
        // recherche(value);
      } else {
        results = recipes;
      }
      //récupération des tags
      let tagAppliances = document.querySelectorAll(".pAppliances");
      console.log(results);
      console.log(tagAppliances);
      tagAppliances.forEach((tag) => {
        console.log(tag.innerHTML);
        tagsAppResults = results.filter((recette) => {
          let applianceMap = [];
          applianceMap.push(recette.appliance.toLowerCase());
          return applianceMap.includes(tag.innerHTML);
        });
        console.log(tagsAppResults);
      });

      // spanAppliances.forEach((span) => {
      //   if (span.innerHTML.includes(eventValue)) {
      //     span.remove();
      //     tagsAppResults = [];
    });
  });
  console.log(tagsAppResults);
  generateFiltersForAppliances(recipes);
  if (spanAppliances.length <= 1) {
    displayRecette(recipes);
  }
  // if (spanAppliances.length > 1) {
  //   let length = spanAppliances.length - 1;
  //   console.log(length);
  //   console.log("plusieurs tags restants");
  // }
};
//   });
//   // });

//   // function closed() {
// };
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
};

const supprimerTagsIngredients = () => {
  pIngredients = document.querySelectorAll(".pIngredients");
  crosses = document.querySelectorAll(".close");
  crosses.forEach((cross) => {
    cross.addEventListener("click", closed);
  });

  function closed() {
    spanIngredients.forEach((span) => {
      if (span.innerText.includes(eventValue)) {
        span.remove();
      }
    });
    generateFiltersForIngredients(recipes);
    if (spanIngredients.length <= 1) {
      console.log(spanIngredients.length);
      displayRecette(recipes);
    }
  }
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
};

const supprimerTagsUstensiles = () => {
  pUstensiles = document.querySelectorAll(".pUstensiles");
  crosses = document.querySelectorAll(".close");
  crosses.forEach((cross) => {
    cross.addEventListener("click", closed);
  });
  function closed() {
    spanUstensiles.forEach((span) => {
      if (span.innerText.includes(eventValue)) {
        span.remove();
      }
    });
    generateFiltersForUstensils(recipes);
    if (spanUstensiles.length <= 1) {
      displayRecette(recipes);
    }
  }
};
