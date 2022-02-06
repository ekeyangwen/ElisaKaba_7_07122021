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
    cross.addEventListener("click", closed);
  });

  function closed() {
    spanAppliances.forEach((span) => {
      if (span.innerHTML.includes(eventValue)) {
        span.remove();
      }
    });

    if (spanAppliances.length <= 1) {
      console.log(spanAppliances.length);
      console.log("Entrée dans spanappliances.length");
      displayRecette(recipes);
    }
    if (spanAppliances.length > 1) {
      let length = spanAppliances.length - 1;
      console.log(length);
      console.log(spanAppliances.length);
      console.log("plusieurs tags restants");
    }
  }
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
    console.log(ustensile);
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
  }
};
