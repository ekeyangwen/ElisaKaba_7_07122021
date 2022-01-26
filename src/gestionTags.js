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
  pAppliances = document.querySelectorAll(".pAppliances");
  pAppliances.forEach((p) => {
    p.addEventListener("click", function (event) {
      value = event.target.innerHTML;
      console.log(value);
      closed();
    });
  });
  function closed() {
    spanAppliances.forEach((span) => {
      if (span.innerHTML.includes(value)) {
        span.remove();
      }
    });
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
  pIngredients = document.querySelectorAll(".pIngredients");
  pIngredients.forEach((p) => {
    p.addEventListener("click", function (event) {
      value = event.target.innerHTML;
      console.log(value);
      closed();
    });
  });
  function closed() {
    spanIngredients.forEach((span) => {
      if (span.innerHTML.includes(value)) {
        span.remove();
      }
    });
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
  pUstensiles = document.querySelectorAll(".pUstensiles");
  pUstensiles.forEach((p) => {
    p.addEventListener("click", function (event) {
      value = event.target.innerHTML;
      console.log(value);
      closed();
    });
  });
  function closed() {
    spanUstensiles.forEach((span) => {
      if (span.innerHTML.includes(value)) {
        span.remove();
      }
    });
  }
};
