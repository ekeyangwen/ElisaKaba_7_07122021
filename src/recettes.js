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
            <ul class="ingredient">
            <li>${this.ingredients} ${this.unit}</li>
          </ul></section>
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
//     this.ingredient = data.ingredient;
//     this.unit = data.unit;
//   }

//   createIngredients() {
// return ``;
//   }
// }
