const affichageTagsAppliance = () => {
  listeAppliance.forEach(
    (app) =>
      function (e) {
        eventAppValue = e.target.innerHTML;
      }
  );
  appareilsResult = document.querySelector("#appareilsResult");
  span = document.createElement("span");
  span.setAttribute("class", "spanAppliance");
  appareilsResult.appendChild(span);
  spanAppliance = document.querySelectorAll(".spanAppliance");
  p = document.createElement("p");
  p.setAttribute("class", "pAppliance");
  p.innerHTML = eventAppValue;
  spanAppliance.forEach((appliance) => {
    appliance.appendChild(p);
  });
  img = document.createElement("img");
  img.src = "./img/croix_fermeture_tag.png";
  img.setAttribute("class", "close");
  spanAppliance.forEach((appliance) => {
    appliance.appendChild(img);
  });
};

const supprimerTagsAppliance = () => {
  let close = document.querySelectorAll(".close");
  close.forEach((cross) => {
    cross.addEventListener("click", effacerTagsAppliance);
  });

  function effacerTagsAppliance() {
    spanAppliance.forEach((span) => {
      span.style.display = "none";
    });
    displayRecette(recipes);
  }
};

const affichageTagsIngredients = () => {
  console.log("affichage ingredient loaded");
  listeIngredients.forEach(
    (ing) =>
      function (e) {
        eventIngValue = e.target.innerHTML;
      }
  );
  ingredientsResult = document.querySelector("#ingredientsResult");
  spanIng = document.createElement("span");
  spanIng.setAttribute("class", "spanIngredients");
  ingredientsResult.appendChild(spanIng);
  pIng = document.createElement("pIng");
  pIng.setAttribute("class", "pIngredients");
  pIng.innerHTML = eventIngvalue;
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

const supprimerTagsIngredient = () => {
  let close = document.querySelectorAll(".close");
  close.forEach((cross) => {
    cross.addEventListener("click", effacerTagsIngredient);
  });

  function effacerTagsIngredient() {
    spanAppliance.forEach((span) => {
      span.style.display = "none";
    });
    displayRecette(recipes);
  }
};

const affichageTagsUstensiles = () => {
  console.log("affichage ustensiles loaded");
  listeUstensiles.forEach(
    (ust) =>
      function (e) {
        eventUstValue = e.target.innerHTML;
      }
  );
  ustensilesResult = document.querySelector("#ustensilesResult");
  spanUst = document.createElement("span");
  spanUst.setAttribute("class", "spanUstensiles");
  ustensilesResult.appendChild(spanUst);
  pUst = document.createElement("pUst");
  pUst.setAttribute("class", "pUstredients");
  pUst.innerHTML = eventUstvalue;
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
    spanUst.forEach((span) => {
      span.style.display = "none";
    });
    displayRecette(recipes);
  }
};
