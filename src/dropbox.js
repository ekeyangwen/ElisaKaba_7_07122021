const addEventKeyupIngredients = () => {
  let inputIng = document.querySelector("#inputIngredients");
  inputIng.addEventListener("keyup", function (event) {
    value = event.target.value;

    let listeIngredients = document.querySelectorAll(".listIng");
    console.log(listeIngredients);
    listeIngredients.forEach((ingredient) => {
      if (!ingredient.innerHTML.toLowerCase().includes(value.toLowerCase())) {
        ingredient.style.display = "none";
        noTagsResult();
      } else {
        ingredient.style.display = "block";
        noResults.style.display = "none";
        listeRecettes.style.display = "block";
      }
    });
  });
};
const addEventKeyupAppliance = () => {
  let inputApp = document.querySelector("#inputAppareils");
  inputApp.addEventListener("keyup", function (event) {
    value = event.target.value;
    let listeAppareil = document.querySelectorAll(".listApp");
    console.log(listeAppareil);
    listeAppareil.forEach((appareil) => {
      console.log(appareil.innerHTML.toLowerCase());
      if (!appareil.innerHTML.toLowerCase().includes(value.toLowerCase())) {
        appareil.style.display = "none";
        noTagsResult();
      } else {
        appareil.style.display = "block";
        noResults.style.display = "none";
        listeRecettes.style.display = "block";
      }
    });
  });
};
const addEventKeyupUstensils = () => {
  let inputUst = document.querySelector("#inputUstensiles");

  inputUst.addEventListener("keyup", function (event) {
    value = event.target.value;

    let listUst = document.querySelectorAll(".listUst");
    listUst.forEach((ustensil) => {
      if (!ustensil.innerHTML.toLowerCase().includes(value.toLowerCase())) {
        ustensil.style.display = "none";
        noTagsResult();
      } else {
        ustensil.style.display = "block";
        noResults.style.display = "none";
        listeRecettes.style.display = "block";
      }
    });
  });
};

function noTagsResult() {
  listeRecettes = document.querySelector("#listeRecettes");
  listeRecettes.style.display = "none";
  noResults = document.querySelector("#noResults");
  noResults.style.display = "block";
}
