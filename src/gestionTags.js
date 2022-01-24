const affichageTagsAppliance = () => {
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

const supprimerTagsAppliance = () => {
  let close = document.querySelectorAll(".close");
  close.forEach((cross) => {
    cross.addEventListener("click", effacerTagsAppliance);
  });

  function effacerTagsAppliance() {
    spanAppliances.forEach((span) => {
      span.style.display = "none";
    });
    displayRecette(recipes);
    generateFiltersForAppliance(recipes);
  }
};

const affichageTagsIngredients = () => {
  ingredientsResult = document.querySelector("#ingredientsResult");
  spanIng = document.createElement("span");
  spanIng.setAttribute("class", "spanIngredients");
  ingredientsResult.appendChild(spanIng);
  pIng = document.createElement("p");
  pIng.setAttribute("class", "pIngredients");
  pIng.innerHTML = eventValue;
  spanIngredients = document.querySelectorAll(".spanIngredients");
  spanIngredients.forEach((ingredient) => {
    console.log("TEST");
    ingredient.appendChild(pIng);
    console.log(pIng);
    console.log(ingredient);
  });
  img = document.createElement("img");
  img.src = "./img/croix_fermeture_tag.png";
  img.setAttribute("class", "close");
  spanIngredients.forEach((ingredient) => {
    ingredient.appendChild(img);
  });
};

const supprimerTagsIngredient = () => {
  let close = document.querySelectorAll(".close");
  close.forEach((cross) => {
    cross.addEventListener("click", effacerTagsIngredient);
  });

  function effacerTagsIngredient() {
    spanIngredients.forEach((span) => {
      span.style.display = "none";
    });
    displayRecette(recipes);
    generateFiltersForIngredients(recipes);
  }
};

const affichageTagsUstensiles = () => {
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

const supprimerTagsUstensile = () => {
  let close = document.querySelectorAll(".close");
  close.forEach((cross) => {
    cross.addEventListener("click", effacerTagsUstensile);
  });

  function effacerTagsUstensile() {
    spanUstensiles.forEach((span) => {
      span.style.display = "none";
    });
    displayRecette(recipes);
    generateFiltersForUstensils(recipes);
  }
};
