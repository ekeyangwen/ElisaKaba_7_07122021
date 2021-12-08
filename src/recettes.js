export class recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }

  createRecipe() {
    return `
          <section class="recette">
      <img id="recetteImg" src="" />
      <section id="recetteDescription">
        <section id="titreListe">
          <h1 id="titre">${this.name}</h1>
          <div class="ingredients">
            <ul class="ingredients"> ${this.ingredients
              .map(
                (ingredient) => `<li class="ingredientTab>${ingredient}</li>`
              )
              .join("")}
            </ul>
        </section>
        </section>
        <section class="tempsRecette">
          <div class="clock">
            <i class="far fa-clock"></i>
            <div class="temps">${this.time}</div>
          </div>
       
          <div class="decription">${this.description}</div>
        </section>
      </section>
    </section>
        `;
  }
}

// export class ingredient {
//   constructor(data) {

//   }

//   createIngredients() {
//     return `
//     <ul class="ingredient">${this.ingredient}
//       <span class="qtite">${this.quantity}</span>
//       <span class="unit">${this.unit}</span>
//     </ul>
//     `;
//   }
