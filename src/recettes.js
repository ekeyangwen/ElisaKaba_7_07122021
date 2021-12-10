export class recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }

  createRecipe() {
    return `
    <section class="recette">
     <div id="recetteImg"></div>
     <div id="legendeRecette">
      <section id="recetteAndTime">
        <div id="titreListe">
          <h1 id="titre">${this.name}</h1>
          </div>
          <section class="tempsRecette">
          <div class="clock">
            <i class="far fa-clock"></i>
            <div class="temps">${this.time}</div>
          </div>        
        </section>
      </section>
      <section id= "recetteDesciption">
        <div class="ingredients"></div>
        <div class="description">${this.description}</div>
          
    </section>
    </section>
        `;
  }
}

// export class oneIngredient {
//   constructor(data) {
//     this.ingredient = data.ingredient;
//     this.quantity = data.quantity;
//     this.unit = data.unit;
//   }
//   // export class oneIngredient {
//   //   constructor(data) {
//   //
//   //   }

//   createIngredient() {
//     return `

//    <ul class="listeIngredients"> ${this.ingredient} ${this.quantity} ${this.unit}</ul>

//   `;
//   }
// }
