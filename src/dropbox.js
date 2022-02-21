noResults = document.querySelector("#noResults");

const addEventKeyupIngredients = () => {
  let inputIng = document.querySelector("#inputIngredients");
  inputIng.addEventListener("keyup", function (event) {
    value = event.target.value;

    let listeIngredients = document.querySelectorAll(".listIng");
    console.log(listeIngredients);
    listeIngredients.forEach((ingredient) => {
      if (ingredient.innerHTML.toLowerCase().includes(value.toLowerCase())) {
        ingredient.style.display = "block";
      } else {
        ingredient.style.display = "none";
      }
    });
  });
};
const addEventKeyupAppliance = () => {
  let inputApp = document.querySelector("#inputAppareils");
  inputApp.addEventListener("keyup", function (event) {
    value = event.target.value;
    let listeAppareil = document.querySelectorAll(".listApp");
    listeAppareil.forEach((appareil) => {
      console.log(
        appareil.innerHTML.toLowerCase().includes(value.toLowerCase())
      );
      if (appareil.innerHTML.toLowerCase().includes(value.toLowerCase())) {
        appareil.style.display = "block";
      } else {
        appareil.style.display = "none";
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
      if (ustensil.innerHTML.toLowerCase().includes(value.toLowerCase())) {
        ustensil.style.display = "block";
      } else {
        ustensil.style.display = "none";
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
