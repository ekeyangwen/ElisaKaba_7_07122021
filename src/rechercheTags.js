const installEventAppliance = () => {
  listeAppliance = document.querySelectorAll(".listeApp");
  listeAppliance.forEach((app) => {
    app.addEventListener("click", function (e) {
      eventAppValue = e.target.innerHTML;
      tagsAppResults = recipes.filter((items) =>
        items.appliance.toLowerCase().includes(eventAppValue.toLowerCase())
      );
      console.log(tagsAppResults);
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
      // close = document.getElementById("close");
      // close.style.display = "block";
      displayRecette(tagsAppResults);
    });
  });

  displayRecette(recipes);
};

const installEventUstensils = () => {
  listUstenstils = document.querySelectorAll(".listeUst");
  listUstenstils.forEach((ust) => {
    ust.addEventListener("click", function (e) {
      eventUstValue = e.target.innerHTML;
      tagsUstResults = ustensilsT.filter((ustensils) =>
        ustensils.toLowerCase().includes(eventUstValue.toLowerCase())
      );
      console.log(tagsUstResults);
      displayRecette(tagsUstResults);
    });
  });

  displayRecette(recipes);
};

const installEventIngredients = () => {
  listIngredients = document.querySelectorAll(".listeIng");
  listIngredients.forEach((ingredient) => {
    ingredient.addEventListener("click", function (event) {
      eventIngvalue = event.target.innerHTML;
      console.log(eventIngvalue);
      tagsIngResults = ingredientsFiltered.filter((ingredients) =>
        ingredients.forEach((items) => {
          items.forEach((item) => {
            item.toLowerCase().includes(eventIngvalue.toLowerCase());
          });
        })
      );
    });

    console.log(tagsIngResults);
    displayRecette(tagsIngResults);
  });
};
